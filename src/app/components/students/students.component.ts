import { StudentsService } from "./../../services/students.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: any;
constructor(private activateRoute: ActivatedRoute, private studentsService: StudentsService) { }
  ngOnInit(): void {
    this.students = this.studentsService.students;
    console.log('StudentList' + this.students)
  }
}
