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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryBuyTicket = void 0;
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
const user_entity_1 = require("./user.entity");
class HistoryBuyTicket {
}
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.historyTicketUser, {
        createForeignKeyConstraints: true,
    }),
    __metadata("design:type", user_entity_1.User)
], HistoryBuyTicket.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_entity_1.Ticket, (ticket) => ticket.historyTicketUser, {
        createForeignKeyConstraints: true,
    }),
    __metadata("design:type", ticket_entity_1.Ticket)
], HistoryBuyTicket.prototype, "ticket", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HistoryBuyTicket.prototype, "bought", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date() }),
    __metadata("design:type", Date)
], HistoryBuyTicket.prototype, "createAt", void 0);
exports.HistoryBuyTicket = HistoryBuyTicket;
//# sourceMappingURL=historyBuyTicket.entity.js.map