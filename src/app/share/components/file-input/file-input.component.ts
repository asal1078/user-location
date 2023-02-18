import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnChanges {

  @Output() getFileSrc = new EventEmitter()
  @Input() isdeleteFile : boolean = false;
  src: string | ArrayBuffer | null = '';

  constructor() { }

  ngOnChanges(): void {
    if(this.isdeleteFile){
      this.deleteFile();
    }
  }

  getImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load",(event: any)=> {
        this.src = event.target.result;;
        this.getFileSrc.emit(this.src)
      })
      reader.readAsDataURL(file);
    }
  }

  deleteFile() {
    this.src = '';
    this.getFileSrc.emit(this.src)
  }



}


