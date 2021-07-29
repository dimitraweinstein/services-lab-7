import { message } from 'statuses';
import Student from '../model/model.js';

//This is where a message will be sent/displayed to the user upon create, update or delete of a student
export default class AppService {
  // when a student is created: {
//     message: `${firstName} ${lastName} has been added to the database with status of ${status}`
// }
  static async createStudent(studentInfo) {
    await message ({
      message: `The student: ${student.firstName} ${student.lastName} has been deleted from the database.`
    });
    const student = await Student.insert(studentInfo);
    return student;
  }

  //when a student is updated:
  // { message: `${firstName} ${lastName} has been updated` }
  //Update A SS Question: Do I need a separate service for each possible item to be udpated or can this service dynamically respond based on what was updated?
  //(Plan: Create a skateboard, then ask a TA if answer doesn't seem obvious)


  //when a student is deleted:
  // { message: `${firstName} ${lastName} has been deleted from the database` }

}



