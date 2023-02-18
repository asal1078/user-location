import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/core/services/location.service';
import { LocationDetail } from 'src/assets/models/location';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router : Router , private locationService : LocationService) { }

  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  location = new LocationDetail();
  isDelete : boolean = false;
  resetMap : boolean = false;

  locationTypes = [
    {
      name : 'Retail'
    },
    {
      name : 'Industrial'
    },
    {
      name : 'Office space'
    },
    {
      name : 'restaurant'
    }
  ]

  ngOnInit(): void {
  }

  submitData() {
    if(!this.location.locationName || !this.location.locationType){
      this.Toast.fire({
        icon: 'warning',
        text: 'please fill location Name and location type!',
        timer: 5000
      })
    }
    else{
      this.locationService.postLocationData(this.location);
      this.isDelete = true;
      this.resetForm()
      this.Toast.fire({
        icon: 'success',
        text: 'your location added successfully!',
        timer: 5000
      })
    }
  }

  getLogo(src : string){
    this.location.logoSrc = src;
  }

  getLocation(location : any){
    this.location.lat = location.lat;
    this.location.long = location.long;
  }

  resetForm(){
    this.location = new LocationDetail();
    this.isDelete = true;
  }

  openFullScreen(){
    this.router.navigateByUrl('/full-screen')
  }


}
