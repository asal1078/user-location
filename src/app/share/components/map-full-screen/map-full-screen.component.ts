import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { LocationDetail } from 'src/assets/models/location';


@Component({
  selector: 'app-map-full-screen',
  templateUrl: './map-full-screen.component.html',
  styleUrls: ['./map-full-screen.component.css']
})
export class MapFullScreenComponent implements OnInit , OnChanges{


  @Input() locationDetails : Array<LocationDetail> = [];
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  popup = Leaflet.popup();
  options = {}
  iconUrl =  '/assets/images/marker.png';

  constructor(){}

    
  ngOnChanges(): void {
    this.options = {
      layers: [
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
      ],
      zoom: 20,
      center: { lat: this.locationDetails[0].lat, lng: this.locationDetails[0].long }
    }
  }

  ngOnInit(): void { 
  }

  initMarkers() {
    var Icon = Leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize:     [50, 45], 
      iconAnchor:   [15, 35], 
      popupAnchor:  [-3, -20] 
    });
    for (let index = 0; index < this.locationDetails.length; index++) {
      const customPopup = 
      `<div class="grid grid-cols-1 gap-2 justify-center">
        <div>
          <span class="text-gray-500">name:</span>
          <span class="font-bold">${this.locationDetails[index].locationName}</span>
        </div>
        <div>
          <span class="text-gray-500">type:</span>
          <span class="font-bold">${this.locationDetails[index].locationType}</span>
        </div>
        <div>
          <img src="${this.locationDetails[index].logoSrc}" width="200">
        </div>
      </div>`;
      const customPopupOptions = {
        'className': 'customPopup' 
       }
      var marker = Leaflet.marker([this.locationDetails[index].lat, this.locationDetails[index].long] , { icon : Icon })
      .bindPopup( customPopup, customPopupOptions)
      .addTo(this.map);
      marker.openPopup();
      this.markers.push(marker)
    }
  }


  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

}
