import { StudentData } from "./../model/studentData";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentsService {
   students = [
        { id:101, name:'Java', mark: 480, gender: 'Male',
        },
        { id:102, name:'Ruby', mark: 280, gender: 'Female',
        },
        { id:103, name:'Python', mark: 185, gender: 'Male',
        },
        { id:104, name:'Dart', mark: 195, gender: 'Female',
        },
        { id:105, name:'Swift', mark: 600, gender: 'Female',
        },
        { id:106, name:'Kotlin',mark: 680, gender: 'Female',
        },
        { id:107, name:'React', mark: 1850, gender: 'Male',
        },
        { id:108, name:'Angular', mark: 190, gender: 'Female',
       },
   ]
  getAllStudents():any{

    const studentList= new Promise((resolve, reject) => {
      setTimeout(() => {resolve(this.students)}, 3000);
    });
    return studentList;
  }
}
