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
exports.TypeOrmConfigServicesProd = exports.TypeOrmConfigServicesDevelop = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
let TypeOrmConfigServicesDevelop = class TypeOrmConfigServicesDevelop {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            password: this.configService.get('DB_PASSWORD'),
            username: this.configService.get('DB_USERNAME'),
            port: this.configService.get('DB_PORT'),
            database: this.configService.get('DB_DATABASENAME'),
            autoLoadEntities: true,
            synchronize: true,
        };
    }
};
TypeOrmConfigServicesDevelop = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TypeOrmConfigServicesDevelop);
exports.TypeOrmConfigServicesDevelop = TypeOrmConfigServicesDevelop;
let TypeOrmConfigServicesProd = class TypeOrmConfigServicesProd {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            url: this.configService.get('DB_URL'),
            autoLoadEntities: true,
            synchronize: false,
            ssl: true,
        };
    }
};
TypeOrmConfigServicesProd = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TypeOrmConfigServicesProd);
exports.TypeOrmConfigServicesProd = TypeOrmConfigServicesProd;
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'phatdo',
    password: '123123',
    database: 'booking-db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*.ts'],
    migrationsTableName: 'migration-table',
    synchronize: false,
});
exports.default = AppDataSource;
//# sourceMappingURL=database.js.map