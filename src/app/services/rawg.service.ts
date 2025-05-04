import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  constructor() { }

  protected APIKEY = '882969a6f0c44046babae5bc1035b366';
  protected BASE_URL = 'https://api.rawg.io/api';
  protected httpClient = inject(HttpClient);
}
