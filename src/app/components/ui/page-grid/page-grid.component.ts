import { Component, Input } from '@angular/core';
import { GridItem } from '../../../interfaces/ui.interface';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-page-grid',
  imports: [RouterLink],
  templateUrl: './page-grid.component.html',
  styleUrl: './page-grid.component.scss'
})
export class PageGridComponent {

  @Input({required:true}) items:GridItem[] = [];
}
