import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type HeroData = {
  imageUrl:string;
  title:string;
  buttonLabel:string;
  text:string;
  url:string;
  newWindow:boolean;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  heroData = input.required<HeroData>();

  get hero(){
    return this.heroData();
  }
}
