import { Component, DestroyRef, signal } from '@angular/core';
import { DevelopersService } from '../../../services/developers.service';
import { Location } from '@angular/common';
import { Developer } from '../../../interfaces/developer';
import { CommonModule } from '@angular/common';
import { ReturnBtnComponent } from "../../../components/ui/return-btn/return-btn.component";
import { BreadcrumbsComponent } from "../../../components/ui/breadcrumbs/breadcrumbs.component";
import { BreadcrumbsItem } from '../../../interfaces/ui.interface';

@Component({
  selector: 'app-developer',
  imports: [CommonModule, ReturnBtnComponent, BreadcrumbsComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {

  constructor(
    private developersService: DevelopersService,
    private destroyRef: DestroyRef,
    private location:Location
  ) {}


  developerId = signal<string>('');
  developer = signal<Developer>({} as Developer);

  currentPage = signal<string>('');
  breadcrumbs:BreadcrumbsItem[] =[
    {label:'Developers',link:'/developers'},
  ]

  ngOnInit():void{
    const state = this.location.getState() as any;

    if(state.id){
      this.developerId.set(state.id);
      const subscription = this.developersService.getDeveloperById(this.developerId())
        .subscribe(res => {
          this.developer.set(res)
          this.currentPage.set(this.developer().name);
        }
        );

      this.destroyRef.onDestroy(()=>subscription.unsubscribe());


    }

  }

}
