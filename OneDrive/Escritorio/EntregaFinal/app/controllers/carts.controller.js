import { finalizePurchase } from '../services/purchase.service.js';

export const purchaseCart = async (req, res) => {
    const { cid } = req.params;
    const userEmail = req.user.email;

    try {
        const result = await finalizePurchase(cid, userEmail);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar la compra', details: error.message });
    }
};