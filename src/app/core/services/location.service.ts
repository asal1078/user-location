import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { LocationDetail } from 'src/assets/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  postLocationData( location : LocationDetail ){
    var locationData : Array<LocationDetail> = JSON.parse(localStorage.getItem("locationData")!) 
    var locationArray = locationData ? locationData : [];
    locationArray.push(location);
    localStorage.setItem("locationData", JSON.stringify(locationArray))
  }

  getLocationData() : Observable<LocationDetail[]> {
    return of(JSON.parse(localStorage.getItem("locationData")!))
  }

}
