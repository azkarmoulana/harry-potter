import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getHouse()
      .subscribe(
        (data) => {
          this.houses = data
        }
      );
  }

}
