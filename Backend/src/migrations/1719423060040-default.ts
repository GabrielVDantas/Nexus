import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719423060040 implements MigrationInterface {
    name = 'Default1719423060040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_03f24291b1765d643a130f4480\` ON \`projects\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`photo\` \`avatar\` longblob NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`avatar\` \`photo\` longblob NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_03f24291b1765d643a130f4480\` ON \`projects\` (\`cover_art_id\`)`);
    }

}
