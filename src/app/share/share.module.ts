import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FileInputComponent } from './components/file-input/file-input.component';
import { MapFullScreenComponent } from './components/map-full-screen/map-full-screen.component';



@NgModule({
  declarations: [
    MapComponent,
    FileInputComponent,
    MapFullScreenComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
  ],
  exports: [
    MapComponent,
    FileInputComponent,
    MapFullScreenComponent
  ]
})
export class ShareModule { }
