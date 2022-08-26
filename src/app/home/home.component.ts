import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSuccess: boolean = false;
  isSubmitted: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    $('#bg-particles').particleground({
      dotColor: 'rgb(101, 236, 236)',
      lineColor: '#D3959B',
      minSpeedX: '0.1',
      minSpeedY: '0.1',
      maxSpeedX: '0.6',
      maxSpeedY: '0.5',
      directionY: 'up',
      density: '9000',
      particleRadius: '4',
      parallaxMultiplier: '4',
    });
  }
  onSubmit(form: NgForm) {
    this.isSubmitted = true;

    if (form.valid) {
      form.value['type'] = 'theamsterdamgoodmurderguide';
      this.http
        .post(environment.API_URL + '/forms', form.value)
        .subscribe((res) => {
          this.isSuccess = true;
    this.isSubmitted = false;
          form.reset();
          setTimeout(() => {
            this.isSuccess = false;
          }, 5000);
        });
    }
  }
}
