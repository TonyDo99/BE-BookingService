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
exports.Order = exports.STATUS_ORDER = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const event_entity_1 = require("./event.entity");
const ticket_entity_1 = require("./ticket.entity");
var STATUS_ORDER;
(function (STATUS_ORDER) {
    STATUS_ORDER["confirmed"] = "confirmed";
    STATUS_ORDER["cancelled"] = "cancelled";
})(STATUS_ORDER = exports.STATUS_ORDER || (exports.STATUS_ORDER = {}));
let Order = class Order {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Order.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.order),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, (event) => event.order),
    __metadata("design:type", event_entity_1.Event)
], Order.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_entity_1.Ticket, (ticket) => ticket.order),
    __metadata("design:type", ticket_entity_1.Ticket)
], Order.prototype, "ticket", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date() }),
    __metadata("design:type", Date)
], Order.prototype, "purchase_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: STATUS_ORDER,
        default: STATUS_ORDER.confirmed,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_order' })
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map