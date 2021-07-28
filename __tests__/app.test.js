import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('futurama routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a student via POST', async () => {
    const student = { firstName: 'Fawn', lastName: 'Nioso', status: 'active' };

    const res = await request(app).post('/students').send(student);

    expect(res.body).toEqual({
      id: '1',
      firstName: 'Fawn',
      lastName: 'Nioso',
      status: 'active'
    });
  });
});
