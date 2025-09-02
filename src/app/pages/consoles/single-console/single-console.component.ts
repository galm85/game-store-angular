import { Component, DestroyRef, inject, input, signal, OnInit } from '@angular/core';
import { ConsolesService } from '../../../services/consoles.service';
import { Location } from '@angular/common';
import { Console } from '../../../interfaces/console.interface';
@Component({
  selector: 'app-single-console',
  imports: [],
  templateUrl: './single-console.component.html',
  styleUrl: './single-console.component.scss'
})
export class SingleConsoleComponent {

  private consolesService = inject(ConsolesService);
  private destroyRef = inject(DestroyRef);
  private location = inject(Location);

  //   consoleDetails = signal({
  //   "id": 187,
  //   "name": "PlayStation 5",
  //   "slug": "playstation5",
  //   "games_count": 1326,
  //   "image_background": "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
  //   "description": "",
  //   "image": null,
  //   "year_start": 2020,
  //   "year_end": null
  // });

  consoleSlug = input.required<string>();
  consoleId = signal<string>('');
  consoleDetails = signal<Console>({} as Console);


  ngOnInit():void{
    const state = this.location.getState() as any;
    if(state?.id){
        this.consoleId.set(state.id);
        console.log(this.consoleId());
        const subscription = this.consolesService.getSingleConsole(this.consoleId()).subscribe({
          next:(data:any)=>{
            this.consoleDetails.set(data);
            console.log(this.consoleDetails());
          }
        })

      this.destroyRef.onDestroy(()=>subscription.unsubscribe())

    }
  }

}
