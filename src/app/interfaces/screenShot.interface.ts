export interface ScreenShotRequest {
  count:number;
  next:null | number;
  previous: null | number;
  results:ScreenShot[];
}


export interface ScreenShot{
  id:number;
  image:string;
  width:number;
  height:number;
  is_deleted:boolean;
}
