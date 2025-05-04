import { computed, inject, Injectable, signal } from '@angular/core';

import type { RawgGame } from '../interfaces/rawg.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private APIKEY = '882969a6f0c44046babae5bc1035b366';
  private baseUrl = 'https://api.rawg.io/api';
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

  getSinglegame(gameId:string){
    return this.httpClient.get(`${this.baseUrl}/games/${gameId}?key=${this.APIKEY}`)
  }

  getSingleGameScreenShots(gameId:string){
    return this.httpClient.get(`${this.baseUrl}/games/${gameId}/screenshots?key=${this.APIKEY}`)
  }



  private fetchGames(){
   return this.httpClient.get<RawgGame[]>(this.gamesURL).subscribe(response => {
      this.games.set(response);
      })
    }

}
