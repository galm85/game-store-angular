import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Console } from '../../interfaces/console.interface';
import { GridItem } from '../../interfaces/ui.interface';
import { PageGridComponent } from "../../components/ui/page-grid/page-grid.component";


const dummyConsoles:any[] =  [
  {
    "id": 4,
    "name": "PC",
    "slug": "pc",
    "games_count": 548282,
    "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "image": null,
    "year_start": null,
    "year_end": null,
    "games": [
        {
            "id": 3498,
            "slug": "grand-theft-auto-v",
            "name": "Grand Theft Auto V",
            "added": 21987
        },
        {
            "id": 3328,
            "slug": "the-witcher-3-wild-hunt",
            "name": "The Witcher 3: Wild Hunt",
            "added": 21627
        },
        {
            "id": 4200,
            "slug": "portal-2",
            "name": "Portal 2",
            "added": 20524
        },
        {
            "id": 4291,
            "slug": "counter-strike-global-offensive",
            "name": "Counter-Strike: Global Offensive",
            "added": 18242
        },
        {
            "id": 5286,
            "slug": "tomb-raider",
            "name": "Tomb Raider (2013)",
            "added": 17567
        },
        {
            "id": 13536,
            "slug": "portal",
            "name": "Portal",
            "added": 17490
        }
    ]
},
{
    "id": 187,
    "name": "PlayStation 5",
    "slug": "playstation5",
    "games_count": 1247,
    "image_background": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg",
    "image": null,
    "year_start": 2020,
    "year_end": null,
    "games": [
        {
            "id": 3498,
            "slug": "grand-theft-auto-v",
            "name": "Grand Theft Auto V",
            "added": 21987
        },
        {
            "id": 3328,
            "slug": "the-witcher-3-wild-hunt",
            "name": "The Witcher 3: Wild Hunt",
            "added": 21627
        },
        {
            "id": 5679,
            "slug": "the-elder-scrolls-v-skyrim",
            "name": "The Elder Scrolls V: Skyrim",
            "added": 16509
        },
        {
            "id": 32,
            "slug": "destiny-2",
            "name": "Destiny 2",
            "added": 14513
        },
        {
            "id": 3070,
            "slug": "fallout-4",
            "name": "Fallout 4",
            "added": 14070
        },
        {
            "id": 41494,
            "slug": "cyberpunk-2077",
            "name": "Cyberpunk 2077",
            "added": 13534
        }
    ]
},
{
    "id": 1,
    "name": "Xbox One",
    "slug": "xbox-one",
    "games_count": 5696,
    "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "image": null,
    "year_start": null,
    "year_end": null,
    "games": [
        {
            "id": 3498,
            "slug": "grand-theft-auto-v",
            "name": "Grand Theft Auto V",
            "added": 21987
        },
        {
            "id": 3328,
            "slug": "the-witcher-3-wild-hunt",
            "name": "The Witcher 3: Wild Hunt",
            "added": 21627
        },
        {
            "id": 4200,
            "slug": "portal-2",
            "name": "Portal 2",
            "added": 20524
        },
        {
            "id": 5286,
            "slug": "tomb-raider",
            "name": "Tomb Raider (2013)",
            "added": 17567
        },
        {
            "id": 5679,
            "slug": "the-elder-scrolls-v-skyrim",
            "name": "The Elder Scrolls V: Skyrim",
            "added": 16509
        },
        {
            "id": 28,
            "slug": "red-dead-redemption-2",
            "name": "Red Dead Redemption 2",
            "added": 16303
        }
    ]
},
]

@Component({
  selector: 'app-consoles',
  imports: [RouterLink, PageGridComponent],
  templateUrl: './consoles.component.html',
  styleUrl: './consoles.component.scss'
})
export class ConsolesComponent implements OnInit{


  consoles = signal<GridItem[]>([]);

  ngOnInit(): void {
      const consoles:GridItem[] = dummyConsoles.map(console =>
        {
          return {
            text:console.name,
            image:console.image_background,
            url:'/consoles/' + console.slug
          }
        }
      );

      this.consoles.set(consoles)
  }

}
