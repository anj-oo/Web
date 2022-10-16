import { StudentData } from "./../../model/studentData";
import { StudentsService } from "./../../services/students.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: StudentData[] = [];
  _filterText:string='';
  filteredStudents: StudentData[]= [];
  totalStudents = new Promise((resolve,reject)=>{
    setTimeout(()=> {resolve(this.filteredStudents.length)}, 2000);
  });
  constructor(private activateRoute: ActivatedRoute, private studentsService: StudentsService,
  private route:ActivatedRoute) { }

  get filterText(){
    return this._filterText;
  }

  set filterText(val){
    this._filterText = val;
    this.filteredStudents = this.filterStudentByGender(val);
  }

  ngOnInit() {
    // this.students = this.route.snapshot.data['students']
    // this.studentsService.getAllStudents().then((data:StudentData[]) => {
    //    console.log('StudentList' + data)
    //    console.log('StudentList' + this.students)
    //   this.students = data;
    // });
    this.students = this.studentsService.students;
    this.filteredStudents = this.students;


  }

  filterStudentByGender(filterTerm: string){
    if (this.students.length === 0 || filterTerm === '') {
      return this.students;
    } else {
      return this.students.filter((student => {
        return student.gender.toLowerCase() === filterTerm.toLowerCase();
      }));
    }
  }


  addStudent() {

    //USING PIPE
    // let studentCopy = Object.assign([], this.students)
    // studentCopy.push({id:109, name: 'Jo', mark: 750, gender: 'Female'})
    // this.students = studentCopy;

    //USING DATA FILTER
    this.students.push({id:109, name: 'Jo', mark: 750, gender: 'Female'});
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  changeGender() {
    //USING PIPE
    // let studentCopy = Object.assign([], this.students);
    // // @ts-ignore
    // studentCopy[0].gender = 'Female';
    // this.students = studentCopy;

    //USING DATA FILTER
    this.students[0].gender = 'Female';
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }
}
