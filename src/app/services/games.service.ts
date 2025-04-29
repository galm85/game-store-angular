import { computed, inject, Injectable, signal } from '@angular/core';

import type { RawgGame } from '../interfaces/rawg.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesURL = 'assets/server/rawgGames.json';
  private httpClient = inject(HttpClient);
  private games = signal<RawgGame[]>([]);

  allGames = this.games.asReadonly();

  constructor(){
    this.fetchGames();
  }

  getHeroGame(){
    return computed(()=>this.games().find(g => g.id === 3498 ))
  }

  getBestGames(){
    return computed(()=>this.games().filter(g => g.rating > 4.45))
  }

  getGameDetails(gameId:string){
    return computed(()=>this.games().find(g=>g.id == +gameId))
  }

  private fetchGames(){
   return this.httpClient.get<RawgGame[]>(this.gamesURL).subscribe(response => {
      this.games.set(response);
      })
    }

}
