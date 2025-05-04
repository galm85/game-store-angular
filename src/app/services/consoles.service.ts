import { Injectable } from '@angular/core';
import { RawgService } from './rawg.service';
import { ConsoleRequest } from '../interfaces/console.interface';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService extends RawgService {

  constructor() {
    super();
   }


   getConsolesList(){
    return this.httpClient.get<ConsoleRequest>(`${this.BASE_URL}/platforms?key=${this.APIKEY}`)
      .pipe(
        map(data=>data.results),
        catchError((error)=>{
            console.log(error);
            return throwError(()=>new Error('No Fetch Consoles'));
        })
      )
   }
}
