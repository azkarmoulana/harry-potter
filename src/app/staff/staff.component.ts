import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStaff()
      .subscribe(
        (data) => {
          this.staff = data
        }
      );
  }

}
