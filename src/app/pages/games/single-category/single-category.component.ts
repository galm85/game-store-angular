import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { Game } from '../../../interfaces/game.interface';
import { RouterLink } from '@angular/router';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-single-category',
  imports: [RouterLink],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent implements OnInit {

  private gamesService = inject(GamesService);
  private destroyRef = inject(DestroyRef);

  categorySlug = input.required<string>();
  games = signal<Game[]>([]);

  ngOnInit(): void {
    const subscribe = this.gamesService.getGamesList('genres',this.categorySlug()).subscribe({
        next:(data:Game[])=>{
            this.games.set(data);
        }
    })

    this.destroyRef.onDestroy(()=>subscribe.unsubscribe());
  }

}
