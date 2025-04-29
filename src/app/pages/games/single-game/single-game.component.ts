import { Component, inject, input, OnInit, signal } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { RawgGame } from '../../../interfaces/rawg.interface';
import { RatingComponent } from "../../../components/ui/rating/rating.component";
import { PlatformsComponent } from "../../../components/ui/platforms/platforms.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-game',
  imports: [RatingComponent, PlatformsComponent,DatePipe],
  templateUrl: './single-game.component.html',
  styleUrl: './single-game.component.scss'
})
export class SingleGameComponent implements OnInit {

  private gamesService = inject(GamesService);

  gameId = input.required<string>();
  game = signal<RawgGame | undefined>(undefined);

  constructor(){}


  ngOnInit(): void {

    setTimeout(() => {
      this.game.update(this.gamesService.getGameDetails(this.gameId()))
      console.log(this.game());
    }, 500);
  }
}
