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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("../entities/event.entity");
const typeorm_2 = require("typeorm");
let EventService = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async getAllEvents() {
        return await this.eventRepository.find({
            relations: {
                ticket: true,
            },
        });
    }
    async findEventById(_id) {
        return await this.eventRepository.find({
            where: {
                _id,
            },
            relations: {
                ticket: true,
            },
        });
    }
    async createEvent(createEventDto) {
        const inserted = await this.eventRepository.insert(createEventDto);
        return inserted;
    }
    async updateEvent(updateEventDto, _id) {
        const { affected } = await this.eventRepository
            .createQueryBuilder()
            .update(event_entity_1.Event)
            .set(Object.assign({}, updateEventDto))
            .where('_id = :_id', { _id })
            .execute();
        if (affected)
            return {
                status: true,
                message: 'Event updated successfully',
            };
        else
            return {
                status: false,
                message: 'Event updated failed',
            };
    }
    async deleteEvent(_id) {
        const { affected } = await this.eventRepository.delete(_id);
        if (affected)
            return {
                status: true,
                message: 'Delete deleted',
            };
        else
            return {
                status: false,
                message: 'Delete event failed',
            };
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map