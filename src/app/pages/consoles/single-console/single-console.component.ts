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

  consoleSlug = input.required<string>();
  consoleId = signal<string>('');
  consoleDetails = signal<Console>({} as Console);


  ngOnInit():void{
    const state = this.location.getState() as any;
    if(state?.id){
        this.consoleId.set(state.id);
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
