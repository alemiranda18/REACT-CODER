import { TicketModel } from '../models/Ticket.model.js';

export class TicketDAO {
    async createTicket(data) {
        return await TicketModel.create(data);
    }

    async getTicketByCode(code) {
        return await TicketModel.findOne({ code });
    }

    async getAllTickets() {
        return await TicketModel.find();
    }
}