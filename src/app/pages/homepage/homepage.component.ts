import { Component, inject, OnInit, signal } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { RouterLink } from '@angular/router';
import { HeroComponent } from "../../components/ui/hero/hero.component";
import { GamesCaruselComponent } from '../../components/ui/games-carusel/games-carusel.component';



@Component({
  selector: 'app-homepage',
  imports: [RouterLink, GamesCaruselComponent, HeroComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

    private gamesService = inject(GamesService);

    banner = {
      imageUrl:'assets/images/homepagebanner.png',
      buttonLabel:'see more',
      text:'Assassin\'s Creed Shadows: check the reactions from the press',
      title:'assassins creed',
      url:'https://store.steampowered.com/app/3159330/Assassins_Creed_Shadows/',
      newWindow:true
    }

    allGames = this.gamesService.allGames
    gamesCarusel = this.gamesService.getBestGames();
    bannerGame = this.gamesService.getHeroGame();

    ngOnInit(): void {
        // console.log(this.gamesCarusel());
        // console.log(this.bannerGame());
    }



}
