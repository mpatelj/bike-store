import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { bike } from '../bikemodel';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrl: './add-bike.component.scss'
})
export class AddBikeComponent implements OnInit {
  bikeform: FormGroup | any;
  brands: string[] = ['Giant', 'Liv', 'Trek'];
  types: string[] = ['Electric', 'Gravel', 'Performance', 'Mountain'];
  ratings: number[] = Array.from({length: 5}, (_, i) => i + 1);
  
  constructor(private formbuilder: FormBuilder, private router: Router, private api: ApiService) {

  }

  ngOnInit(): void {
    this.bikeform = this.formbuilder.group({
      brand: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  submitBike(data: bike) {
    this.api.addbike(data).subscribe((res => {
      this.bikeform.reset();
      this.router.navigate(["/bikelist"]);
    }));
  }
}
