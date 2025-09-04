import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreadcrumbsItem } from '../../../interfaces/ui.interface';




@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink,CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

  @Input() breadcrumbs:BreadcrumbsItem[] = [];
  @Input() currentPage:string = '';
}
