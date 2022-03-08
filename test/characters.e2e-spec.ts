import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';

describe('CharactersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/characters (GET)', () => {
    return request(app.getHttpServer()).get('/characters').expect(200);
  });

  it('/characters/name (GET)', () => {
    return request(app.getHttpServer()).get('/characters/name/naruto').expect(200);
  });

  it('/characters/id (GET)', () => {
    return request(app.getHttpServer()).get('/characters/id/62071ca8f3b6d1a772120975').expect(200);
  });
});