import { Component, Input, OnInit } from '@angular/core';
import { Platform, Platform2 } from '../../../interfaces/rawg.interface';

@Component({
  selector: 'app-platforms',
  imports: [],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.scss'
})
export class PlatformsComponent {

  @Input({required:true}) platforms:Platform[] | undefined;

}
