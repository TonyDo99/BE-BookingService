"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableMigration1670480800708 = void 0;
class tableMigration1670480800708 {
    constructor() {
        this.name = 'tableMigration1670480800708';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "end_date"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "endDate"`);
        await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "startDate"`);
    }
}
exports.tableMigration1670480800708 = tableMigration1670480800708;
//# sourceMappingURL=1670480800708-table-migration.js.map