import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719168083656 implements MigrationInterface {
    name = 'Default1719168083656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_1dde96f9791cf7efa86596d85f7\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`ownDescription\` \`description\` text NULL`);
        await queryRunner.query(`CREATE TABLE \`project_categories\` (\`project_id\` bigint NOT NULL, \`category_id\` bigint NOT NULL, INDEX \`IDX_3a55961fc2a7ee7e324844cb2f\` (\`project_id\`), INDEX \`IDX_678d720a87c534b1043688d8d9\` (\`category_id\`), PRIMARY KEY (\`project_id\`, \`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`project\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`projectForeignKey\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`projectId\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP COLUMN \`mainImage\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP COLUMN \`descritiveImages\``);
        await queryRunner.query(`ALTER TABLE \`images\` ADD \`project_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD \`user_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD \`cover_art_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD UNIQUE INDEX \`IDX_03f24291b1765d643a130f4480\` (\`cover_art_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_03f24291b1765d643a130f4480\` ON \`projects\` (\`cover_art_id\`)`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_194625052dc6bbadaa0c250468b\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_bd55b203eb9f92b0c8390380010\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_03f24291b1765d643a130f4480e\` FOREIGN KEY (\`cover_art_id\`) REFERENCES \`images\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_categories\` ADD CONSTRAINT \`FK_3a55961fc2a7ee7e324844cb2f9\` FOREIGN KEY (\`project_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`project_categories\` ADD CONSTRAINT \`FK_678d720a87c534b1043688d8d96\` FOREIGN KEY (\`category_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project_categories\` DROP FOREIGN KEY \`FK_678d720a87c534b1043688d8d96\``);
        await queryRunner.query(`ALTER TABLE \`project_categories\` DROP FOREIGN KEY \`FK_3a55961fc2a7ee7e324844cb2f9\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_03f24291b1765d643a130f4480e\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_bd55b203eb9f92b0c8390380010\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_194625052dc6bbadaa0c250468b\``);
        await queryRunner.query(`DROP INDEX \`REL_03f24291b1765d643a130f4480\` ON \`projects\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP INDEX \`IDX_03f24291b1765d643a130f4480\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP COLUMN \`cover_art_id\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`project_id\``);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD \`descritiveImages\` longblob NULL`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD \`mainImage\` longblob NULL`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD \`projectId\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD \`projectForeignKey\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD \`project\` longblob NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_678d720a87c534b1043688d8d9\` ON \`project_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_3a55961fc2a7ee7e324844cb2f\` ON \`project_categories\``);
        await queryRunner.query(`DROP TABLE \`project_categories\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`description\` \`ownDescription\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_1dde96f9791cf7efa86596d85f7\` FOREIGN KEY (\`projectId\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
