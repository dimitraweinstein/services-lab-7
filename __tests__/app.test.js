import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Student from '../lib/Model/Model.js';

describe('student routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a student via POST', async () => {
    const student = { firstName: 'Fawn', lastName: 'Nioso', status: 'active' };

    const res = await request(app).post('/api/v1/students').send(student);

    expect(res.body).toEqual({
      id: '1',
      firstName: 'Fawn',
      lastName: 'Nioso',
      status: 'active'
    });
  });

  it('gets all students via GET', async () => {
    const fawn = await Student.insert({
      id: '1',
      firstName: 'Fawn',
      lastName: 'Nioso',
      status: 'active'
    });

    const jon = await Student.insert({
      id: '2',
      firstName: 'Jon',
      lastName: 'Stuart',
      status: 'active'
    });

    const alexander = await Student.insert({
      id: '3',
      firstName: 'Alexander',
      lastName: 'Spycher',
      status: 'active'
    });

    return request(app).get('/api/v1/students')
      .then((res) => {
        expect(res.body).toEqual([fawn, jon, alexander]);
      });
  });
});