import { Component, OnInit } from '@angular/core';
declare var $ :any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
