import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { Game } from '../../../interfaces/game.interface';
import { GamesService } from '../../../services/games.service';
import { GridItem } from '../../../interfaces/ui.interface';
import { PageGridComponent } from "../../../components/ui/page-grid/page-grid.component";

@Component({
  selector: 'app-single-category',
  imports: [PageGridComponent],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent implements OnInit {

  private gamesService = inject(GamesService);
  private destroyRef = inject(DestroyRef);

  categorySlug = input.required<string>();
  games = signal<GridItem[]>([]);

  ngOnInit(): void {
    const subscribe = this.gamesService.getGamesList('genres',this.categorySlug()).subscribe({
        next:(data:Game[])=>{
          const gamesGrid = data.map(item=>({
            text:item.name,
            url:'/games/'+item.id,
            image:item.background_image
          }));
            this.games.set(gamesGrid);
        }
    })

    this.destroyRef.onDestroy(()=>subscribe.unsubscribe());
  }

}
