import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { bike } from '../bikemodel';

@Component({
  selector: 'app-update-bike',
  templateUrl: './update-bike.component.html',
  styleUrl: './update-bike.component.scss'
})
export class UpdateBikeComponent {
  public bikeid!: number;
  public bikedata: bike = {} as bike;

  brands: string[] = ['Giant', 'Liv', 'Trek'];
  types: string[] = ['Electric', 'Gravel', 'Performance', 'Mountain'];
  ratings: number[] = Array.from({length: 5}, (_, i) => i + 1);

  constructor(private api:ApiService, private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.bikeid = param['id'];
    });

    this.api.fetchdata(this.bikeid).subscribe((data: bike) => {
      this.bikedata = data;
    });
  }

  update() {
    this.api.updatebike(this.bikedata, this.bikeid).subscribe((res: bike) => {
      alert("Bike info updated");
      this.route.navigate(['/bikelist']);
    });
  }
}
