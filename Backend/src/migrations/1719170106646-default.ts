import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719170106646 implements MigrationInterface {
    name = 'Default1719170106646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_b3613537a59b41f5811258edf99\``);
        await queryRunner.query(`DROP INDEX \`IDX_b3613537a59b41f5811258edf9\` ON \`projects\``);
        await queryRunner.query(`DROP INDEX \`REL_b3613537a59b41f5811258edf9\` ON \`projects\``);
        await queryRunner.query(`ALTER TABLE \`projects\` CHANGE \`project_id\` \`cover_art_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD UNIQUE INDEX \`IDX_03f24291b1765d643a130f4480\` (\`cover_art_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_03f24291b1765d643a130f4480\` ON \`projects\` (\`cover_art_id\`)`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_03f24291b1765d643a130f4480e\` FOREIGN KEY (\`cover_art_id\`) REFERENCES \`cover_art_images\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_03f24291b1765d643a130f4480e\``);
        await queryRunner.query(`DROP INDEX \`REL_03f24291b1765d643a130f4480\` ON \`projects\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP INDEX \`IDX_03f24291b1765d643a130f4480\``);
        await queryRunner.query(`ALTER TABLE \`projects\` CHANGE \`cover_art_id\` \`project_id\` bigint NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b3613537a59b41f5811258edf9\` ON \`projects\` (\`project_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b3613537a59b41f5811258edf9\` ON \`projects\` (\`project_id\`)`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_b3613537a59b41f5811258edf99\` FOREIGN KEY (\`project_id\`) REFERENCES \`cover_art_images\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
