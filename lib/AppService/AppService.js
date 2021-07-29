import Student from '../model/model.js';

//This is where a message will be sent/displayed to the user upon create, update or delete of a student
export default class AppService {
  static async createStudent(studentInfo) {
    await (
      `The student: ${studentInfo.firstName} ${studentInfo.lastName} has been deleted from the database.`
    );
    const student = await Student.insert(studentInfo);
    return student;
  }
  //when a student is updated:
  // { message: `${firstName} ${lastName} has been updated` }
  //Update A SS Question: Do I need a separate service for each possible item to be udpated or can this service dynamically respond based on what was updated?
  //(Plan: Create a skateboard, then ask a TA if answer doesn't seem obvious)
  static async updateStudent(id, firstName, lastName, status) {
    await (
      `Student ${firstName} ${lastName}, ${id}, ${status} has been updated`
    );
    const student = await Student.updateById(id, { firstName, lastName, status });
    return student;
  }

  //when a student is deleted:
  // { message: `${firstName} ${lastName} has been deleted from the database` }

}



