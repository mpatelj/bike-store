import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { bike } from '../bikemodel';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.scss'
})
export class BikeListComponent implements OnInit {
  data: undefined | bike[];
  rating = Array.from({length: 5}, (_, i) => i + 1);
  isLoading: boolean = true;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.getBike();
  }

  getBike() {
    this.isLoading = true;
    this.api.getbike().subscribe(res => {
      this.data = res;
    });
    this.isLoading = false;
  }

  deleteBike(id: number) {
    console.log(id);
    this.api.deletebike(id).subscribe(res => {
      alert("Bike Deleted Successfully");
      this.getBike();
    });
  }

  convertRating(num?: number) {
    return Array.from({length: num!}, (_, i) => i + 1);
  }
}
