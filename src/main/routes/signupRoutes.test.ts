import request from 'supertest';

import app from '../config/app';

import { MongoHelper } from '../../infra/db/mongodb/helpers/mongoHelper';

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });


  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Junior Miranda',
        email: 'jr.miranda@outlook.com',
        password: '123456',
        passwordConfirmation: '123456',
      })
      .expect(200);
  });
});
