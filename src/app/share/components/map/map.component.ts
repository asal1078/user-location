import { Component, OnInit, Output ,EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Output() getLatLong = new EventEmitter();
  @Input() isReset : boolean = false;
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  iconUrl =  '/assets/images/location.png';
  lat !: number;
  lng !: number;



  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 14,
    center: { lat: 28.626137, lng: 79.821603 }
  }


  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 32.693783 , lng: 51.704418 },
        draggable: true,
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    var Icon = Leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize:     [30, 35], 
      iconAnchor:   [15, 35], 
      popupAnchor:  [-3, -76] 
    });
    return Leaflet.marker(data.position , { draggable: data.draggable , icon:Icon })
      .on('dragend', (event) => this.markerDragEnd(event));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }


  markerDragEnd($event: any) {
    let latLng = $event.target.getLatLng()
    this.lat = latLng.lat;
    this.lng = latLng.lng;
    this.getLatLong.emit({lat : this.lat , long : this.lng})
  }
  



}
