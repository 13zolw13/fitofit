import { INestApplication, ModuleMetadata } from '@nestjs/common';
import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import { AppModule } from '../src/modules/app/app.module';
import * as request from 'supertest';
import { DatabaseCleaner } from '../utils/cleaner';

export const createTestingModule: typeof Test.createTestingModule = (
  metadata: ModuleMetadata,
): TestingModuleBuilder => {
  return Test.createTestingModule(metadata);
};

const mockdata = {
  categoryWorkOut: 'hard One',
  difficulty: 'must be a string',
  time: 20,
  date: '2021-02-03T21:42:51-08:00',
  score: 10,
};

describe('Workout', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    await new DatabaseCleaner().cleanup();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/workout [GET]', () => {
    async function createLog() {
      await request(app.getHttpServer())
        .post('/workout')
        .send({ ...mockdata })
        .expect(201);
    }

    it('returns logs table', async () => {
      await createLog();
      const { body: response } = await request(app.getHttpServer())
        .get('/workout')
        .send();
      console.log(response);
      expect(response.length).toEqual(1);
    });
  });
});
