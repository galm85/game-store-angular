import { computed, inject, Injectable, signal } from '@angular/core';

import type { Game, GamesListRequest } from '../interfaces/game.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { ScreenShotRequest } from '../interfaces/screenShot.interface';
import { GenreRequest } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private APIKEY = '882969a6f0c44046babae5bc1035b366';
  private baseUrl = 'https://api.rawg.io/api';
  private gamesURL = 'assets/server/rawgGames.json';
  private httpClient = inject(HttpClient);
  private games = signal<Game[]>([]);

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

  getSingleGame(gameId:string){
    return this.httpClient.get(`${this.baseUrl}/games/${gameId}?key=${this.APIKEY}`)
  }

  getSingleGameScreenShots(gameId:string){
    return this.httpClient.get<ScreenShotRequest>(`${this.baseUrl}/games/${gameId}/screenshots?key=${this.APIKEY}`)
      .pipe(
        map(data=> data.results),
        catchError((error)=>{
          console.log(error);
          return throwError(()=>new Error('No Fetch screen shots'));
        })
      )
  }

  getGamesList(idenifier:string,value:string){
    return this.httpClient.get<GamesListRequest>(`${this.baseUrl}/games?key=${this.APIKEY}&${idenifier}=${value}`)
      .pipe(
        map(data => data.results),
        catchError((error)=>{
          console.log(error);
          return throwError(()=>new Error('No Fetch Games'));
        })
      )
  }

  getGenres(){
    return this.httpClient.get<GenreRequest>(`${this.baseUrl}/genres?key=${this.APIKEY}`)
      .pipe(
        map(data=> data.results),
        catchError((error)=>{
          console.log(error);
          return throwError(()=>new Error('No Fetch Genres'));
        })
      )
  }



  private fetchGames(){
   return this.httpClient.get<Game[]>(this.gamesURL).subscribe(response => {
      this.games.set(response);
      })
    }

}
