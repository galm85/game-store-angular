import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { GridItem } from '../../../interfaces/ui.interface';
import { PageGridComponent } from "../../../components/ui/page-grid/page-grid.component";


@Component({
  selector: 'app-categories',
  imports: [PageGridComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  private gamesService = inject(GamesService);
  private destroyRef = inject(DestroyRef);

  categories = signal<GridItem[]>([]);

  ngOnInit(): void {
    const subscription = this.gamesService.getGenres().subscribe({
      next:(data =>{
        const categoriesGrid = data.map(item => ({text:item.name,url:'/games/genre/'+item.slug,image:item.image_background}));
        console.log(categoriesGrid);
        this.categories.set(categoriesGrid)
      })
    })

    this.destroyRef.onDestroy(()=>subscription.unsubscribe());
  }

}
