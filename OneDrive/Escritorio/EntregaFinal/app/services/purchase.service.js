import { CartModel } from '../models/Cart.model.js';
import { ProductModel } from '../models/Product.model.js';
import { TicketDAO } from '../dao/Ticket.dao.js';
import { TicketDTO } from '../dto/Ticket.dto.js';
import { generateCode } from '../utils/generateCode.js';

const ticketDAO = new TicketDAO();

export const finalizePurchase = async (cid, purchaserEmail) => {
    const cart = await CartModel.findById(cid).populate('products.product');
    if (!cart) throw new Error('Carrito no encontrado');

    const purchasedItems = [];
    const rejectedItems = [];
    let totalAmount = 0;

    for (const item of cart.products) {
        const product = item.product;
        const quantity = item.quantity;

        if (product.stock >= quantity) {
            product.stock -= quantity;
            await product.save();

            purchasedItems.push(item);
            totalAmount += product.price * quantity;
        } else {
            rejectedItems.push(item);
        }
    }

    const rawTicket = await ticketDAO.createTicket({
        code: generateCode(),
        amount: totalAmount,
        purchaser: purchaserEmail
    });

    const ticket = new TicketDTO(rawTicket);

    cart.products = rejectedItems;
    await cart.save();

    return {
        message: 'Compra procesada',
        ticket,
        productosNoComprados: rejectedItems
    };
};