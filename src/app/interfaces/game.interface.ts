export interface Game {
  id:string;
  title:string;
  description:string;
  image:string;
  price:number;
  onSale:boolean;
  inStock:number;
  salePrice?:number;
  gallery?:string[];
  isPromotion?:boolean;

}
