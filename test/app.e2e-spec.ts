import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('getAdmins', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          getAdmins {
            adminName
          }
        }`,
      })
      .expect(200)
      .expect({
        data: {
          getAdmins: [],
        },
      });
  });

  it('getGroups', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          getGroups {
            groupName
          }
        }`,
      })
      .expect(200)
      .expect({
        data: {
          getGroups: [],
        },
      });
  });
});
