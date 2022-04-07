import {MigrationInterface, QueryRunner} from "typeorm";

export class empAddress1649329471341 implements MigrationInterface {
    name = 'empAddress1649329471341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addressses" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_fff18fa393a2a06fe6e5e4276bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "addresses_id" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_deb2a222094d803e8d23b13a463" UNIQUE ("addresses_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_deb2a222094d803e8d23b13a463" FOREIGN KEY ("addresses_id") REFERENCES "addressses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_deb2a222094d803e8d23b13a463"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_deb2a222094d803e8d23b13a463"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "addresses_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id"`);
        await queryRunner.query(`DROP TABLE "addressses"`);
    }

}
