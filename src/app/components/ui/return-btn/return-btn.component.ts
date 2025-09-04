import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-btn',
  imports: [],
  templateUrl: './return-btn.component.html',
  styleUrl: './return-btn.component.scss'
})
export class ReturnBtnComponent {

  constructor(private location:Location){}

  goBack():void{
    this.location.back();
  }
}
