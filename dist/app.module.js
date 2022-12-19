"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const authen_module_1 = require("./authentication/authen.module");
const database_1 = require("./config/database");
const event_module_1 = require("./event/event.module");
const order_module_1 = require("./order/order.module");
const ticket_module_1 = require("./ticket/ticket.module");
const user_module_1 = require("./user/user.module");
const database_joi_1 = require("./validate/database.joi");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `env.stage.${process.env.NODE_ENV || 'dev'}`,
                validationSchema: process.env.NODE_ENV === 'dev' ? database_joi_1.validateDevDB : database_joi_1.validateProdDB,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: process.env.NODE_ENV === 'dev'
                    ? database_1.TypeOrmConfigServicesDevelop
                    : database_1.TypeOrmConfigServicesProd,
            }),
            authen_module_1.AuthModule,
            user_module_1.UserModule,
            event_module_1.EventModule,
            ticket_module_1.TicketModule,
            order_module_1.OrderModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map