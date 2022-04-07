import {MigrationInterface, QueryRunner} from "typeorm";

export class projectsTable1648804565717 implements MigrationInterface {
    name = 'projectsTable1648804565717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "pid" SERIAL NOT NULL, "pname" character varying NOT NULL, "description" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_85ad21a40c69e877e83581f12bb" PRIMARY KEY ("pid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
