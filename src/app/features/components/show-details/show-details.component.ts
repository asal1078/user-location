import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/core/services/location.service';
import { LocationDetail } from 'src/assets/models/location';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  locationDetails : Array<LocationDetail> = []

  constructor(private locationService : LocationService) { 
    
  }

  ngOnInit(): void {
    this.locationService.getLocationData().subscribe((data:Array<LocationDetail>)=>{
      this.locationDetails = data
    })
  }

}
