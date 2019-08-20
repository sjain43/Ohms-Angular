import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-control',
  templateUrl: './activity-control.component.html',
  styleUrls: ['./activity-control.component.scss']
})
export class ActivityControlComponent implements OnInit {
  public registration = [];


  constructor(private activity: ActivityService) { }

  ngOnInit() {
    //Collecting the data of inactive user by calling service class method
  this.activity.getActivity()
  .subscribe(data => this.registration = data);
  }
}

