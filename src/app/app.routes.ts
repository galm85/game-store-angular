import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';

export const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutComponent},
  {path:'accessories',component:AccessoriesComponent},
];
