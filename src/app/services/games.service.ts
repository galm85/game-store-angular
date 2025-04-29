import { computed, inject, Injectable, signal } from '@angular/core';


import { Game } from '../interfaces/game.interface';
import { RawgGame } from '../interfaces/rawg.interface';
import { HttpClient } from '@angular/common/http';
import {games as serverGames} from '../../server/games';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // private games = signal<Game[]>(serverGames);

  private gamesURL = 'assets/server/rawgGames.json';
  private httpClient = inject(HttpClient);
  private games = signal<RawgGame[]>([]);
  public  allGames = this.games.asReadonly();

  constructor(){
    this.fetchGames();
  }
//494384
  getHeroGame(){
    return computed(()=>this.games().find(g => g.id === 3498 ))
  }

  getBestGames(){
    return computed(()=>this.games().filter(g => g.rating > 4.45))
  }

  private fetchGames(){
   return this.httpClient.get<RawgGame[]>(this.gamesURL).subscribe(response => {
      this.games.set(response);
      })
    }

}
