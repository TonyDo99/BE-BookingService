"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_entity_1 = require("../entities/ticket.entity");
const typeorm_2 = require("typeorm");
let TicketService = class TicketService {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async getAllTickets() {
        return await this.ticketRepository.find({});
    }
    async findTicketById(_id) {
        return await this.ticketRepository.findOneBy({ _id });
    }
    async createTicket(createTicketDto) {
        const createdTicket = this.ticketRepository.manager.create(ticket_entity_1.Ticket, Object.assign({}, createTicketDto));
        return await this.ticketRepository.save(createdTicket);
    }
    async deleteTicket(_id) {
        const { affected } = await this.ticketRepository.delete(_id);
        if (affected)
            return {
                status: true,
                message: 'Ticket successfully deleted !',
            };
        else
            return {
                status: true,
                message: 'Ticket failed deleted !',
            };
    }
    async buyTicket(_id, user, numberTicket) {
        await this.ticketRepository
            .createQueryBuilder()
            .update(ticket_entity_1.Ticket)
            .set({
            quantity: () => `quantity - ${numberTicket}`,
        })
            .where('_id = :_id', { _id })
            .execute();
        const ticket = await this.ticketRepository.findOneBy({ _id });
        ticket.users = [user];
        return await this.ticketRepository.save(ticket);
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map