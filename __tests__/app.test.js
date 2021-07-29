import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Student from '../lib/model/model.js';

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

  it('gets one student by id via GET', async () => {
    const student = await Student.insert({
      id: '1',
      firstName: 'Fawn',
      lastName: 'Nioso',
      status: 'active'
    });

    const res = await request(app).get(`/api/v1/students/${student.id}`);

    expect(res.body).toEqual(student);
  });

  it('updates one student by id via PUT', async () => {
    const student = await Student.insert({
      id: '1',
      firstName: 'Fawn',
      lastName: 'Nioso',
      status: 'active'
    });
    
    const res = await request(app)
      .put(`/api/v1/students/${student.id}`)
      .send({ status: 'inactive' });

    expect(res.body).toEqual({ ...student, status: 'inactive' });
  });

  it('deletes one student by id via DELETE', async () => {
    const student = await Student.insert({
      id: '1',
      firstName: 'Fawn',
      lastName: 'Nioso',
      status: 'active'
    });

    const res = await request(app).delete(`/api/v1/students/${student.id}`);
    
    expect(res.body).toEqual({
      message: `The student: ${student.firstName} ${student.lastName} has been deleted from the database.`
    });
  });
});
