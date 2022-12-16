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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../entities/user.entity");
const getUser_decorator_1 = require("../util/getUser.decorator");
const create_dto_1 = require("./dto/create.dto");
const updateTicket_dto_1 = require("./dto/updateTicket.dto");
const ticket_service_1 = require("./ticket.service");
let TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async getAllTickets() {
        return await this.ticketService.getAllTickets();
    }
    async createTicket(createTicketDto) {
        try {
            return await this.ticketService.createTicket(createTicketDto);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: error,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateTicket(_id, user, updateTicketDto) {
        try {
            const { quantity, name, description, price } = updateTicketDto;
            if (quantity && (!name || !description || !price))
                return {
                    message: 'Ticket was updated quantity !',
                    response: await this.ticketService.buyTicket(_id, user, quantity),
                };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: error,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteTicket(_id) {
        try {
            return await this.ticketService.deleteTicket(_id);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: error,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Get)('allTickets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getAllTickets", null);
__decorate([
    (0, common_1.Post)('createTicket'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Patch)('updateTicket/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, getUser_decorator_1.GetUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User,
        updateTicket_dto_1.UpdateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateTicket", null);
__decorate([
    (0, common_1.Delete)('deleteTicket/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "deleteTicket", null);
TicketController = __decorate([
    (0, common_1.Controller)('ticket'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map