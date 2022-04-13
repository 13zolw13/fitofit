import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWorkoutTable1649849370000 implements MigrationInterface {
  name = 'CreateLogsTable1649849370000';

  table = new Table({
    name: 'workouts',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
      },
      {
        name: 'categoryWorkOut',
        type: 'string',
      },
      {
        name: 'difficulty',
        type: 'string',
      },
      {
        name: 'time',
        type: 'int',
      },
      {
        name: 'score',
        type: 'int',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
