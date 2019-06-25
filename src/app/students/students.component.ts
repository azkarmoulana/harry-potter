import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStudent()
      .subscribe(
        (data) => {
          this.students = data
        }
      );
  }

}
