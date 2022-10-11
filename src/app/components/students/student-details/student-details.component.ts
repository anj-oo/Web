import { StudentsService } from "./../../../services/students.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

 student:any;
  studentId: any;
  editMode: boolean = true;
  constructor(private activateRoute: ActivatedRoute, private studentsService: StudentsService,
  private router: Router) { }

  ngOnInit(): void {
    this.studentId = this.activateRoute.snapshot.paramMap.get('id');
    this.student = this.studentsService.students.find(s => s.id == this.studentId);
    this.editMode = Boolean(this.activateRoute.snapshot.paramMap.get('edit'));
    this.activateRoute.queryParamMap.subscribe((params) => {
      this.editMode = Boolean(params.get('edit'));
    })
  }

  appendQuery() {
    this.router.navigate(['/Students/StudentDetails', this.studentId], {queryParams: {edit: true}})
  }

}
