import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type navigationLink = {label:string,link:string}
@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navLinks:navigationLink[] = [
    {label:'About',link:'about'},
    {label:'Games',link:'games'},
    {label:'Accessories',link:'accessories'},
    {label:'Contact Us',link:'contact-us'},
  ]

}
