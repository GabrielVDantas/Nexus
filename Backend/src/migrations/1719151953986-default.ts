import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719151953986 implements MigrationInterface {
    name = 'Default1719151953986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`images\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`imageBuffer\` longblob NOT NULL, \`project\` longblob NOT NULL, \`projectForeignKey\` bigint NOT NULL, \`projectId\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` text NOT NULL, \`goal\` decimal(7,2) NOT NULL, \`mainImage\` longblob NULL, \`descritiveImages\` longblob NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_1dde96f9791cf7efa86596d85f7\` FOREIGN KEY (\`projectId\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_1dde96f9791cf7efa86596d85f7\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
        await queryRunner.query(`DROP TABLE \`images\``);
    }

}
