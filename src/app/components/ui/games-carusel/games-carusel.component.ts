import { Component, input, OnInit, signal } from '@angular/core';
import {   CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
 } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { Game } from '../../../interfaces/game.interface';



@Component({
  selector: 'app-games-carusel',
  imports: [CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    RouterLink
],
  templateUrl: './games-carusel.component.html',
  styleUrl: './games-carusel.component.scss'
})
export class GamesCaruselComponent implements OnInit {

// games = signal<Game[]>([]);
games = input<Game[]>([]);




ngOnInit(): void {
  // this.games.set(dummyGames);
}


}
