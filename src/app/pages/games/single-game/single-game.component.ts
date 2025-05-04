import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { Game } from '../../../interfaces/game.interface';
import { RatingComponent } from "../../../components/ui/rating/rating.component";
import { PlatformsComponent } from "../../../components/ui/platforms/platforms.component";
import { DatePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ScreenShot } from '../../../interfaces/screenShot.interface';



@Component({
  selector: 'app-single-game',
  imports: [RatingComponent, PlatformsComponent,DatePipe,MatIconModule],
  templateUrl: './single-game.component.html',
  styleUrl: './single-game.component.scss'
})
export class SingleGameComponent implements OnInit {

  private gamesService = inject(GamesService);
  private destroyRef = inject(DestroyRef);

  gameId = input.required<string>();
  game = signal<Game | undefined>(undefined)
  screenShots = signal<ScreenShot[]>([])


  ngOnInit(): void {

    const subscription = this.gamesService.getSingleGame(this.gameId()).subscribe({
      next:(data:any)=>{
        this.game.set(data);
      }
    })

    const screenShotsSubscription = this.gamesService.getSingleGameScreenShots(this.gameId()).subscribe({
      next:(data:any)=>{
        this.screenShots.set(data);
      }
    })

    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
    this.destroyRef.onDestroy(()=>screenShotsSubscription.unsubscribe())
  }
}
