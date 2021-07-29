import Student from '../model/model.js';

export default class AppService {

  static async createStudent(studentInfo) {
      
    const createdStudentMessage = ({
      message: `The student: ${studentInfo.firstName} ${studentInfo.lastName} has been deleted from the database.`
    });
        
    await Student.insert(studentInfo);
        
    return createdStudentMessage;
  }

  static async updateStudent(id, { firstName, lastName, status }) {
      
    const updatedStudentMessage = ({
      message: `Student ${id} record has been updated.`
    });
        
    await Student.updateById(id, { firstName, lastName, status });
        
    return updatedStudentMessage;
  }

  static async deleteStudent(id) {
      
    const deletedStudentMessage = ({ 
      message: 'Student has been deleted from the database'
    });
      
    await Student.deleteById(id);
      
    return deletedStudentMessage;
  }
    
}



