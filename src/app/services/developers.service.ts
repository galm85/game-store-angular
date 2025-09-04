import { Injectable } from '@angular/core';
import { RawgService } from './rawg.service';
import { Developer } from '../interfaces/developer';
import { catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService extends RawgService{

  constructor() {
    super();
   }


   getDeveloperById(id:string){
      return this.httpClient.get<Developer>(`${this.BASE_URL}/developers/${id}?key=${this.APIKEY}`)
      .pipe(
        map(data=>data),
        catchError((error)=>{
          console.log('getDeveloperById: ', error);
          return throwError(()=>new Error('No Fetch developer'))
        })
      )
   }
}
