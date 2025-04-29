import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { SingleGameComponent } from './pages/games/single-game/single-game.component';

export const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'games/:gameId',component:SingleGameComponent}
];
