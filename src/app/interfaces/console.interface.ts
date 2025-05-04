
export interface ConsoleRequest {
  count:number;
  next:string | null;
  previous:string | null;
  results:Console[];
}

export interface Console {
  id:number;
  name:string;
  slug:string;
  games_count:number;
  image_background: string;
  image: null | string;
  year_start: null | string | number;
  year_end: null | string | number;
  games:[{
    id:number;
    slug:string;
    name:string;
    added:number;
  }]
}
