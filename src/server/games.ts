import { Game } from "../app/interfaces/game.interface";

export const games:Game[] = [
  {
    id:'assassins creed',
    title:'assassins\'s creed',
    description:'assassins',
    image:'assassinscreedshadow.png',
    price:69.99,
    onSale:false,
    inStock:500,
    isPromotion:true
  },
  {
    id:'godofwarraganrok',
    title:'god of war ragnarok',
    description:'god',
    image:'godofwarragnarok.jpg',
    price:49.99,
    onSale:true,
    inStock:100,
    salePrice:29.99,
    isPromotion:true,
  },

]
