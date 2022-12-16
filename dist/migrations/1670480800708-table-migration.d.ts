import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class tableMigration1670480800708 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
