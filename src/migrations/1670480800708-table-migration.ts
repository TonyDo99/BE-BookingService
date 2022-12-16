import { MigrationInterface, QueryRunner } from 'typeorm';

export class tableMigration1670480800708 implements MigrationInterface {
  name = 'tableMigration1670480800708';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "start_date"`);
    await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "end_date"`);
    // await queryRunner.query(
    //   `ALTER TABLE "tb_event" ADD "startDate" date NOT NULL`,
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "tb_event" ADD "endDate" date NOT NULL`,
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "endDate"`);
    await queryRunner.query(`ALTER TABLE "tb_event" DROP COLUMN "startDate"`);
    // await queryRunner.query(
    //   `ALTER TABLE "tb_event" ADD "end_date" date NOT NULL`,
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "tb_event" ADD "start_date" date NOT NULL`,
    // );
  }
}
