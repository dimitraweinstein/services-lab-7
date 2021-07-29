import { Router } from 'express';
import AppService from '../AppService/AppService.js';
import Student from '../model/model.js';

export default Router()
  .post('/', (req, res, next) => {
    AppService.createStudent(req.body)
      .then((student) => {
        res.send(student);
      })
      .catch((err) => {
        next(err);
      });
  })

  .get('/', (req, res, next) => {
    Student.getAll()
      .then((students) => {
        res.send(students);
      })
      .catch((err) => {
        next(err);
      });
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Student.getById(id)
      .then((student) => {
        res.send(student);
      })
      .catch((err) => {
        next(err);
      });
  })

  .put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, status } = req.body;
    AppService.updateStudent(id, { firstName, lastName, status })
      .then((student) => {
        res.send(student);
      })
      .catch((err) => {
        next(err);
      });
  })

  .delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    AppService.deleteStudent(id)
      .then((student) => {
        res.send(student);
      })
      .catch ((err) => {
        next(err);
      });
  });
