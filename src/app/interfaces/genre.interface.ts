export interface GenreRequest{
  count:number;
  next:null|string;
  previous:null|string;
  results:Genre[];
}

export interface Genre {

  id:number;
  name:string;
  slug:string;
  games_count:number;
  image_background:string;
  games:[{
    id:number;
    slug:string;
    name:string;
    added:number;
  }]
}
