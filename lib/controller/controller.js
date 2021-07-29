import { Router } from 'express';
import Student from '../Model/Model.js';

//CRUD routes go here. They will contain the Service as well as the Model for each endpoint

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const student = await Student.insert(req.body);
        
      res.send(student);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const students = await Student.getAll();
        
      res.send(students);
    } catch (err) {
      next(err);
    }
  });