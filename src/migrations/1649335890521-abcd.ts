import {MigrationInterface, QueryRunner} from "typeorm";

export class abcd1649335890521 implements MigrationInterface {
    name = 'abcd1649335890521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_deb2a222094d803e8d23b13a463"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_deb2a222094d803e8d23b13a463" FOREIGN KEY ("addresses_id") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_deb2a222094d803e8d23b13a463"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id" character varying`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_deb2a222094d803e8d23b13a463" FOREIGN KEY ("addresses_id") REFERENCES "addressses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
