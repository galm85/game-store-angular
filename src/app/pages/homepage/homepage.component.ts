import { Component, inject, OnInit, signal } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { RouterLink } from '@angular/router';


interface Banner{
  imageUrl:string;
  button:string;
  text:string;
  title:string;
}

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

    private gamesService = inject(GamesService);

    banner:Banner = {
      imageUrl:'assets/images/homepagebanner.png',
      button:'see more',
      text:'Assassin\'s Creed Shadows: check the reactions from the press',
      title:'assassins creed'
    }

    allGames = this.gamesService.allGames
    gamesCarusel = this.gamesService.getBestGames();
    bannerGame = this.gamesService.getHeroGame();

    ngOnInit(): void {
        // console.log(this.gamesCarusel());
        // console.log(this.bannerGame());
    }



}
