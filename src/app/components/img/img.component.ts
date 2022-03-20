import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img: string = ''
  @Output() loaded = new EventEmitter();
  imgDefault = './assets/default.png'

  imgErr(){
    this.img = this.imgDefault
  }

  imgLoaded(img: string){
    console.log('log hijo')
    this.loaded.emit(img)
  }
}
