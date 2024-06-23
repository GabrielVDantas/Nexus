import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719169647456 implements MigrationInterface {
    name = 'Default1719169647456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_03f24291b1765d643a130f4480e\``);
        await queryRunner.query(`DROP INDEX \`IDX_03f24291b1765d643a130f4480\` ON \`projects\``);
        await queryRunner.query(`DROP INDEX \`REL_03f24291b1765d643a130f4480\` ON \`projects\``);
        await queryRunner.query(`ALTER TABLE \`projects\` CHANGE \`cover_art_id\` \`project_id\` bigint NULL`);
        await queryRunner.query(`CREATE TABLE \`cover_art_images\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`imageBuffer\` longblob NOT NULL, \`project_id\` bigint NULL, UNIQUE INDEX \`REL_3eefadfde41ac26bf0ed3ba699\` (\`project_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`screenshot_images\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`imageBuffer\` longblob NOT NULL, \`project_id\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD UNIQUE INDEX \`IDX_b3613537a59b41f5811258edf9\` (\`project_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b3613537a59b41f5811258edf9\` ON \`projects\` (\`project_id\`)`);
        await queryRunner.query(`ALTER TABLE \`cover_art_images\` ADD CONSTRAINT \`FK_3eefadfde41ac26bf0ed3ba699c\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`screenshot_images\` ADD CONSTRAINT \`FK_b015b19a65e2fc609826735f704\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_b3613537a59b41f5811258edf99\` FOREIGN KEY (\`project_id\`) REFERENCES \`cover_art_images\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_b3613537a59b41f5811258edf99\``);
        await queryRunner.query(`ALTER TABLE \`screenshot_images\` DROP FOREIGN KEY \`FK_b015b19a65e2fc609826735f704\``);
        await queryRunner.query(`ALTER TABLE \`cover_art_images\` DROP FOREIGN KEY \`FK_3eefadfde41ac26bf0ed3ba699c\``);
        await queryRunner.query(`DROP INDEX \`REL_b3613537a59b41f5811258edf9\` ON \`projects\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP INDEX \`IDX_b3613537a59b41f5811258edf9\``);
        await queryRunner.query(`DROP TABLE \`screenshot_images\``);
        await queryRunner.query(`DROP INDEX \`REL_3eefadfde41ac26bf0ed3ba699\` ON \`cover_art_images\``);
        await queryRunner.query(`DROP TABLE \`cover_art_images\``);
        await queryRunner.query(`ALTER TABLE \`projects\` CHANGE \`project_id\` \`cover_art_id\` bigint NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_03f24291b1765d643a130f4480\` ON \`projects\` (\`cover_art_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_03f24291b1765d643a130f4480\` ON \`projects\` (\`cover_art_id\`)`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_03f24291b1765d643a130f4480e\` FOREIGN KEY (\`cover_art_id\`) REFERENCES \`images\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
