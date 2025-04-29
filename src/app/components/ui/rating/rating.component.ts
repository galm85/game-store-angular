import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-rating',
  imports: [MatIconModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit{

  @Input({required:true}) rate:number | undefined;
  rateArray:number[] = [];
  isHalf:boolean = false;

  ngOnInit(): void {

    if(this.rate){
      const arr = Array.from({length:this.rate},(_,i)=>i);
      this.rateArray = [...arr];
      console.log(arr);
      if(this.rate > arr.length){
        this.isHalf = true;
      }
    }

  }



}
