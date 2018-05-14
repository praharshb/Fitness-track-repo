import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  [x: string]: any;
  constructor() { }

  ngOnInit() {
  }
  profile(Name: string, Age: number, Height: number, Weight: number, Goalweight: number)
  {
    this.Game.profit(Name, Age, Height, Weight, Goalweight);
}
}