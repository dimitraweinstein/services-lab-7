import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import studentsController from './controller/controller.js';
import AppService from './AppService/AppService.js';

const app = express();

app.use(express.json());

app.use('/api/v1/students', studentsController);

// app.post('/', (req, res, next) => {
//   AppService.createStudent(req.body)
//.then((student) => {
//   res.send(student);}
// .catch(err){
    // next();
// }
//   
// // or....
    
// const student = AppService.createStudent(req.body);
// res.send(student);
// next();
// });

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
