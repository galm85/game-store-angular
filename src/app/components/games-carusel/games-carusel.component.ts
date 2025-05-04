import { Component, input, OnInit, signal } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import {   CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
 } from '@coreui/angular';
import { RouterLink } from '@angular/router';


const dummyGames:any[]=  [
  {
      "id": 3498,
      "slug": "grand-theft-auto-v",
      "name": "Grand Theft Auto V",
      "released": "2013-09-17",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      "rating": 4.47,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 4249,
              "percent": 59.0
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 2356,
              "percent": 32.71
          },
          {
              "id": 3,
              "title": "meh",
              "count": 459,
              "percent": 6.37
          },
          {
              "id": 1,
              "title": "skip",
              "count": 138,
              "percent": 1.92
          }
      ],
      "ratings_count": 7090,
      "reviews_text_count": 64,
      "added": 21987,
      "added_by_status": {
          "yet": 553,
          "owned": 12692,
          "beaten": 6217,
          "toplay": 623,
          "dropped": 1150,
          "playing": 752
      },
      "metacritic": 92,
      "playtime": 74,
      "suggestions_count": 440,
      "updated": "2025-05-03T03:20:14",
      "user_game": null,
      "reviews_count": 7202,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": {
                  "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
                  "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 187,
                  "name": "PlayStation 5",
                  "slug": "playstation5",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1244,
                  "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 186,
                  "name": "Xbox Series S/X",
                  "slug": "xbox-series-x",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1079,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2013-09-17",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          }
      ],
      "stores": [
          {
              "id": 290376,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 290375,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 438095,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          },
          {
              "id": 290377,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          },
          {
              "id": 290378,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 27158,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7798,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13806,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 150,
              "name": "Third-Person Shooter",
              "slug": "third-person-shooter",
              "language": "eng",
              "games_count": 3875,
              "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 1045,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 144,
              "name": "Crime",
              "slug": "crime",
              "language": "eng",
              "games_count": 3089,
              "image_background": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
          },
          {
              "id": 62349,
              "name": "vr mod",
              "slug": "vr-mod",
              "language": "eng",
              "games_count": 17,
              "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 1827221,
              "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
          },
          {
              "id": 1827222,
              "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
          },
          {
              "id": 1827223,
              "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
          },
          {
              "id": 1827225,
              "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
          },
          {
              "id": 1827226,
              "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
          },
          {
              "id": 1827227,
              "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
          }
      ]
  },
  {
      "id": 3328,
      "slug": "the-witcher-3-wild-hunt",
      "name": "The Witcher 3: Wild Hunt",
      "released": "2015-05-18",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      "rating": 4.64,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 5364,
              "percent": 76.74
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1142,
              "percent": 16.34
          },
          {
              "id": 3,
              "title": "meh",
              "count": 297,
              "percent": 4.25
          },
          {
              "id": 1,
              "title": "skip",
              "count": 187,
              "percent": 2.68
          }
      ],
      "ratings_count": 6877,
      "reviews_text_count": 79,
      "added": 21628,
      "added_by_status": {
          "yet": 1168,
          "owned": 12690,
          "beaten": 5059,
          "toplay": 831,
          "dropped": 988,
          "playing": 892
      },
      "metacritic": 92,
      "playtime": 43,
      "suggestions_count": 684,
      "updated": "2025-05-03T18:36:06",
      "user_game": null,
      "reviews_count": 6990,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 186,
                  "name": "Xbox Series S/X",
                  "slug": "xbox-series-x",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1079,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 187,
                  "name": "PlayStation 5",
                  "slug": "playstation5",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1244,
                  "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo Switch",
                  "slug": "nintendo-switch",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5626,
                  "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2015-05-18",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo",
                  "slug": "nintendo"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 59528,
              "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
          }
      ],
      "stores": [
          {
              "id": 354780,
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog",
                  "domain": "gog.com",
                  "games_count": 6733,
                  "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
              }
          },
          {
              "id": 3565,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 305376,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 312313,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 676022,
              "store": {
                  "id": 6,
                  "name": "Nintendo Store",
                  "slug": "nintendo",
                  "domain": "nintendo.com",
                  "games_count": 9129,
                  "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 30770,
              "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7798,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 8015,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 41,
              "name": "Dark",
              "slug": "dark",
              "language": "eng",
              "games_count": 17428,
              "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
          },
          {
              "id": 44,
              "name": "Nudity",
              "slug": "nudity",
              "language": "eng",
              "games_count": 7781,
              "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          },
          {
              "id": 336,
              "name": "controller support",
              "slug": "controller-support",
              "language": "eng",
              "games_count": 293,
              "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
          },
          {
              "id": 145,
              "name": "Choices Matter",
              "slug": "choices-matter",
              "language": "eng",
              "games_count": 7087,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 40,
              "name": "Dark Fantasy",
              "slug": "dark-fantasy",
              "language": "eng",
              "games_count": 5037,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 192,
              "name": "Mature",
              "slug": "mature",
              "language": "eng",
              "games_count": 4050,
              "image_background": "https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg"
          },
          {
              "id": 66,
              "name": "Medieval",
              "slug": "medieval",
              "language": "eng",
              "games_count": 7383,
              "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
          },
          {
              "id": 82,
              "name": "Magic",
              "slug": "magic",
              "language": "eng",
              "games_count": 10552,
              "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
          },
          {
              "id": 218,
              "name": "Multiple Endings",
              "slug": "multiple-endings",
              "language": "eng",
              "games_count": 10366,
              "image_background": "https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          },
          {
              "id": 30336,
              "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
          },
          {
              "id": 30337,
              "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
          },
          {
              "id": 30338,
              "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
          },
          {
              "id": 30339,
              "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
          },
          {
              "id": 30340,
              "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
          },
          {
              "id": 30342,
              "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
          }
      ]
  },
  {
      "id": 4200,
      "slug": "portal-2",
      "name": "Portal 2",
      "released": "2011-04-18",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      "rating": 4.59,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 4118,
              "percent": 69.34
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1496,
              "percent": 25.19
          },
          {
              "id": 3,
              "title": "meh",
              "count": 177,
              "percent": 2.98
          },
          {
              "id": 1,
              "title": "skip",
              "count": 148,
              "percent": 2.49
          }
      ],
      "ratings_count": 5884,
      "reviews_text_count": 38,
      "added": 20524,
      "added_by_status": {
          "yet": 656,
          "owned": 12997,
          "beaten": 5693,
          "toplay": 394,
          "dropped": 624,
          "playing": 160
      },
      "metacritic": 95,
      "playtime": 11,
      "suggestions_count": 564,
      "updated": "2025-05-03T18:36:14",
      "user_game": null,
      "reviews_count": 5939,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2011-04-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2011-04-18",
              "requirements_en": null,
              "requirements_ru": {
                  "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
                  "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
              }
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2011-04-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2011-04-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2011-04-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2011-04-18",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 7,
              "name": "Puzzle",
              "slug": "puzzle",
              "games_count": 97335,
              "image_background": "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg"
          }
      ],
      "stores": [
          {
              "id": 465889,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 13134,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 4526,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 33916,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 27158,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 189,
              "name": "Female Protagonist",
              "slug": "female-protagonist",
              "language": "eng",
              "games_count": 14195,
              "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13806,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 75,
              "name": "Local Co-Op",
              "slug": "local-co-op",
              "language": "eng",
              "games_count": 5811,
              "image_background": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg"
          },
          {
              "id": 11669,
              "name": "stats",
              "slug": "stats",
              "language": "eng",
              "games_count": 5500,
              "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1659,
              "image_background": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg"
          },
          {
              "id": 25,
              "name": "Space",
              "slug": "space",
              "language": "eng",
              "games_count": 43646,
              "image_background": "https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 2063,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 40833,
              "name": "Captions available",
              "slug": "captions-available",
              "language": "eng",
              "games_count": 1443,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 40834,
              "name": "Commentary available",
              "slug": "commentary-available",
              "language": "eng",
              "games_count": 285,
              "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
          },
          {
              "id": 87,
              "name": "Science",
              "slug": "science",
              "language": "eng",
              "games_count": 1893,
              "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
          }
      ],
      "esrb_rating": {
          "id": 2,
          "name": "Everyone 10+",
          "slug": "everyone-10-plus"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
          },
          {
              "id": 99018,
              "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
          },
          {
              "id": 99019,
              "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
          },
          {
              "id": 99020,
              "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
          },
          {
              "id": 99021,
              "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
          },
          {
              "id": 99022,
              "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
          },
          {
              "id": 99023,
              "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
          }
      ]
  },
  {
      "id": 4291,
      "slug": "counter-strike-global-offensive",
      "name": "Counter-Strike: Global Offensive",
      "released": "2012-08-21",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      "rating": 3.56,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1678,
              "percent": 46.56
          },
          {
              "id": 3,
              "title": "meh",
              "count": 936,
              "percent": 25.97
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 584,
              "percent": 16.2
          },
          {
              "id": 1,
              "title": "skip",
              "count": 406,
              "percent": 11.27
          }
      ],
      "ratings_count": 3567,
      "reviews_text_count": 28,
      "added": 18242,
      "added_by_status": {
          "yet": 267,
          "owned": 14076,
          "beaten": 1101,
          "toplay": 79,
          "dropped": 2088,
          "playing": 631
      },
      "metacritic": 81,
      "playtime": 64,
      "suggestions_count": 602,
      "updated": "2025-05-03T08:49:36",
      "user_game": null,
      "reviews_count": 3604,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2012-08-21",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
                  "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2012-08-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2012-08-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2012-08-21",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 4619,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 11489,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 49169,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5955,
              "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
          },
          {
              "id": 11669,
              "name": "stats",
              "slug": "stats",
              "language": "eng",
              "games_count": 5500,
              "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1659,
              "image_background": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg"
          },
          {
              "id": 157,
              "name": "PvP",
              "slug": "pvp",
              "language": "eng",
              "games_count": 10910,
              "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 1045,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 70,
              "name": "War",
              "slug": "war",
              "language": "eng",
              "games_count": 9787,
              "image_background": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg"
          },
          {
              "id": 40837,
              "name": "In-App Purchases",
              "slug": "in-app-purchases",
              "language": "eng",
              "games_count": 3094,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 77,
              "name": "Realistic",
              "slug": "realistic",
              "language": "eng",
              "games_count": 7765,
              "image_background": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1880,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 131,
              "name": "Fast-Paced",
              "slug": "fast-paced",
              "language": "eng",
              "games_count": 10684,
              "image_background": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg"
          },
          {
              "id": 81,
              "name": "Military",
              "slug": "military",
              "language": "eng",
              "games_count": 2273,
              "image_background": "https://media.rawg.io/media/games/109/10956e4561064fc4f1dda0baa540735e.jpg"
          },
          {
              "id": 170,
              "name": "Competitive",
              "slug": "competitive",
              "language": "eng",
              "games_count": 1238,
              "image_background": "https://media.rawg.io/media/screenshots/616/616437f375a1080756c917b1437404f3.jpg"
          },
          {
              "id": 40856,
              "name": "Valve Anti-Cheat enabled",
              "slug": "valve-anti-cheat-enabled",
              "language": "eng",
              "games_count": 105,
              "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
          },
          {
              "id": 73,
              "name": "e-sports",
              "slug": "e-sports",
              "language": "eng",
              "games_count": 80,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          },
          {
              "id": 245,
              "name": "Trading",
              "slug": "trading",
              "language": "eng",
              "games_count": 1342,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
          },
          {
              "id": 81644,
              "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
          },
          {
              "id": 81645,
              "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
          },
          {
              "id": 81646,
              "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
          },
          {
              "id": 81647,
              "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
          },
          {
              "id": 81648,
              "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
          },
          {
              "id": 81649,
              "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
          }
      ]
  },
  {
      "id": 5286,
      "slug": "tomb-raider",
      "name": "Tomb Raider (2013)",
      "released": "2013-03-05",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      "rating": 4.06,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 2432,
              "percent": 60.38
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 1040,
              "percent": 25.82
          },
          {
              "id": 3,
              "title": "meh",
              "count": 436,
              "percent": 10.82
          },
          {
              "id": 1,
              "title": "skip",
              "count": 120,
              "percent": 2.98
          }
      ],
      "ratings_count": 3996,
      "reviews_text_count": 14,
      "added": 17567,
      "added_by_status": {
          "yet": 695,
          "owned": 11537,
          "beaten": 4380,
          "toplay": 285,
          "dropped": 554,
          "playing": 116
      },
      "metacritic": 86,
      "playtime": 10,
      "suggestions_count": 659,
      "updated": "2025-05-03T03:34:26",
      "user_game": null,
      "reviews_count": 4028,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2013-03-05",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2013-03-05",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2013-03-05",
              "requirements_en": {
                  "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2013-03-05",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "i486-100, 8 Мб",
                  "recommended": "Pentium 166, 16 Мб"
              }
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2013-03-05",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2013-03-05",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          }
      ],
      "stores": [
          {
              "id": 33824,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          },
          {
              "id": 13151,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 5640,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 218233,
              "store": {
                  "id": 8,
                  "name": "Google Play",
                  "slug": "google-play",
                  "domain": "play.google.com",
                  "games_count": 17110,
                  "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
              }
          },
          {
              "id": 79036,
              "store": {
                  "id": 4,
                  "name": "App Store",
                  "slug": "apple-appstore",
                  "domain": "apps.apple.com",
                  "games_count": 75582,
                  "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
              }
          },
          {
              "id": 713685,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 26559,
              "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1817,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 189,
              "name": "Female Protagonist",
              "slug": "female-protagonist",
              "language": "eng",
              "games_count": 14195,
              "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
          },
          {
              "id": 15,
              "name": "Stealth",
              "slug": "stealth",
              "language": "eng",
              "games_count": 6756,
              "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
          },
          {
              "id": 69,
              "name": "Action-Adventure",
              "slug": "action-adventure",
              "language": "eng",
              "games_count": 19138,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 150,
              "name": "Third-Person Shooter",
              "slug": "third-person-shooter",
              "language": "eng",
              "games_count": 3875,
              "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          {
              "id": 74,
              "name": "Retro",
              "slug": "retro",
              "language": "eng",
              "games_count": 43274,
              "image_background": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg"
          },
          {
              "id": 110,
              "name": "Cinematic",
              "slug": "cinematic",
              "language": "eng",
              "games_count": 2862,
              "image_background": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg"
          },
          {
              "id": 269,
              "name": "Quick-Time Events",
              "slug": "quick-time-events",
              "language": "eng",
              "games_count": 786,
              "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
          },
          {
              "id": 126,
              "name": "Dinosaurs",
              "slug": "dinosaurs",
              "language": "eng",
              "games_count": 1785,
              "image_background": "https://media.rawg.io/media/screenshots/83e/83ec6107288567671f6008d9a05fab7e.jpg"
          },
          {
              "id": 306,
              "name": "Lara Croft",
              "slug": "lara-croft",
              "language": "eng",
              "games_count": 14,
              "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 99160,
              "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
          },
          {
              "id": 99161,
              "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
          },
          {
              "id": 99162,
              "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
          },
          {
              "id": 99163,
              "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
          },
          {
              "id": 99164,
              "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
          },
          {
              "id": 99165,
              "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
          }
      ]
  },
  {
      "id": 13536,
      "slug": "portal",
      "name": "Portal",
      "released": "2007-10-09",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      "rating": 4.49,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 2933,
              "percent": 59.93
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1657,
              "percent": 33.86
          },
          {
              "id": 3,
              "title": "meh",
              "count": 196,
              "percent": 4.0
          },
          {
              "id": 1,
              "title": "skip",
              "count": 108,
              "percent": 2.21
          }
      ],
      "ratings_count": 4851,
      "reviews_text_count": 30,
      "added": 17490,
      "added_by_status": {
          "yet": 466,
          "owned": 11074,
          "beaten": 5167,
          "toplay": 282,
          "dropped": 417,
          "playing": 84
      },
      "metacritic": 90,
      "playtime": 4,
      "suggestions_count": 302,
      "updated": "2025-05-03T03:00:19",
      "user_game": null,
      "reviews_count": 4894,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": {
                  "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": {
                  "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
              },
              "requirements_ru": {
                  "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
                  "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
              }
          },
          {
              "platform": {
                  "id": 21,
                  "name": "Android",
                  "slug": "android",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 52433,
                  "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": {
                  "minimum": "4.4 and up"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo Switch",
                  "slug": "nintendo-switch",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5626,
                  "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
              },
              "released_at": "2007-10-09",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 8,
                  "name": "Android",
                  "slug": "android"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo",
                  "slug": "nintendo"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 7,
              "name": "Puzzle",
              "slug": "puzzle",
              "games_count": 97335,
              "image_background": "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg"
          }
      ],
      "stores": [
          {
              "id": 14890,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 40973,
              "store": {
                  "id": 8,
                  "name": "Google Play",
                  "slug": "google-play",
                  "domain": "play.google.com",
                  "games_count": 17110,
                  "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 13062,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 27158,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1817,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 189,
              "name": "Female Protagonist",
              "slug": "female-protagonist",
              "language": "eng",
              "games_count": 14195,
              "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13806,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 2063,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 40833,
              "name": "Captions available",
              "slug": "captions-available",
              "language": "eng",
              "games_count": 1443,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 111,
              "name": "Short",
              "slug": "short",
              "language": "eng",
              "games_count": 57982,
              "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
          },
          {
              "id": 114,
              "name": "Physics",
              "slug": "physics",
              "language": "eng",
              "games_count": 20589,
              "image_background": "https://media.rawg.io/media/games/96a/96a48ac7487d9db9179d83170afcb16a.jpg"
          },
          {
              "id": 148,
              "name": "Dark Humor",
              "slug": "dark-humor",
              "language": "eng",
              "games_count": 3423,
              "image_background": "https://media.rawg.io/media/screenshots/37c/37c927bb0af482dbb9e16df7cbbb5e43.jpg"
          },
          {
              "id": 40834,
              "name": "Commentary available",
              "slug": "commentary-available",
              "language": "eng",
              "games_count": 285,
              "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
          },
          {
              "id": 40839,
              "name": "Includes Source SDK",
              "slug": "includes-source-sdk",
              "language": "eng",
              "games_count": 63,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
          },
          {
              "id": 87,
              "name": "Science",
              "slug": "science",
              "language": "eng",
              "games_count": 1892,
              "image_background": "https://media.rawg.io/media/screenshots/4c7/4c717d1808ea116b8c938189432a7c4c.jpg"
          }
      ],
      "esrb_rating": {
          "id": 3,
          "name": "Teen",
          "slug": "teen"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
          },
          {
              "id": 115793,
              "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
          },
          {
              "id": 115794,
              "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
          },
          {
              "id": 115795,
              "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
          },
          {
              "id": 115796,
              "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
          },
          {
              "id": 115797,
              "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
          },
          {
              "id": 115798,
              "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
          }
      ]
  },
  {
      "id": 12020,
      "slug": "left-4-dead-2",
      "name": "Left 4 Dead 2",
      "released": "2009-11-17",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      "rating": 4.09,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1793,
              "percent": 53.33
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 1063,
              "percent": 31.62
          },
          {
              "id": 3,
              "title": "meh",
              "count": 381,
              "percent": 11.33
          },
          {
              "id": 1,
              "title": "skip",
              "count": 125,
              "percent": 3.72
          }
      ],
      "ratings_count": 3340,
      "reviews_text_count": 12,
      "added": 17359,
      "added_by_status": {
          "yet": 393,
          "owned": 12878,
          "beaten": 2593,
          "toplay": 117,
          "dropped": 1227,
          "playing": 151
      },
      "metacritic": 89,
      "playtime": 9,
      "suggestions_count": 600,
      "updated": "2025-05-03T03:34:37",
      "user_game": null,
      "reviews_count": 3362,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2009-11-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2009-11-17",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2009-11-17",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
                  "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2009-11-17",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 13208,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 34000,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 16,
              "name": "Horror",
              "slug": "horror",
              "language": "eng",
              "games_count": 47125,
              "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 1,
              "name": "Survival",
              "slug": "survival",
              "language": "eng",
              "games_count": 9940,
              "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
          },
          {
              "id": 75,
              "name": "Local Co-Op",
              "slug": "local-co-op",
              "language": "eng",
              "games_count": 5811,
              "image_background": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5955,
              "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
          },
          {
              "id": 11669,
              "name": "stats",
              "slug": "stats",
              "language": "eng",
              "games_count": 5500,
              "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1659,
              "image_background": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg"
          },
          {
              "id": 63,
              "name": "Zombies",
              "slug": "zombies",
              "language": "eng",
              "games_count": 10835,
              "image_background": "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 1045,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 17,
              "name": "Survival Horror",
              "slug": "survival-horror",
              "language": "eng",
              "games_count": 9300,
              "image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg"
          },
          {
              "id": 43,
              "name": "Post-apocalyptic",
              "slug": "post-apocalyptic",
              "language": "eng",
              "games_count": 4523,
              "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
          },
          {
              "id": 40833,
              "name": "Captions available",
              "slug": "captions-available",
              "language": "eng",
              "games_count": 1443,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 5,
              "name": "Replay Value",
              "slug": "replay-value",
              "language": "eng",
              "games_count": 1996,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1880,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 40856,
              "name": "Valve Anti-Cheat enabled",
              "slug": "valve-anti-cheat-enabled",
              "language": "eng",
              "games_count": 105,
              "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
          },
          {
              "id": 40834,
              "name": "Commentary available",
              "slug": "commentary-available",
              "language": "eng",
              "games_count": 285,
              "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
          },
          {
              "id": 40839,
              "name": "Includes Source SDK",
              "slug": "includes-source-sdk",
              "language": "eng",
              "games_count": 63,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          },
          {
              "id": 99748,
              "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
          },
          {
              "id": 99749,
              "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
          },
          {
              "id": 99750,
              "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
          },
          {
              "id": 99751,
              "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
          },
          {
              "id": 99752,
              "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
          },
          {
              "id": 99753,
              "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
          }
      ]
  },
  {
      "id": 5679,
      "slug": "the-elder-scrolls-v-skyrim",
      "name": "The Elder Scrolls V: Skyrim",
      "released": "2011-11-11",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      "rating": 4.42,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 2765,
              "percent": 57.51
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1512,
              "percent": 31.45
          },
          {
              "id": 3,
              "title": "meh",
              "count": 432,
              "percent": 8.99
          },
          {
              "id": 1,
              "title": "skip",
              "count": 99,
              "percent": 2.06
          }
      ],
      "ratings_count": 4756,
      "reviews_text_count": 35,
      "added": 16509,
      "added_by_status": {
          "yet": 513,
          "owned": 9909,
          "beaten": 3898,
          "toplay": 430,
          "dropped": 1358,
          "playing": 401
      },
      "metacritic": 94,
      "playtime": 46,
      "suggestions_count": 609,
      "updated": "2025-05-03T03:25:17",
      "user_game": null,
      "reviews_count": 4808,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
                  "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
              }
          },
          {
              "platform": {
                  "id": 186,
                  "name": "Xbox Series S/X",
                  "slug": "xbox-series-x",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1079,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 187,
                  "name": "PlayStation 5",
                  "slug": "playstation5",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1244,
                  "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo Switch",
                  "slug": "nintendo-switch",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5626,
                  "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2011-11-11",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo",
                  "slug": "nintendo"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 59528,
              "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
          }
      ],
      "stores": [
          {
              "id": 6037,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 15144,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 32919,
              "store": {
                  "id": 6,
                  "name": "Nintendo Store",
                  "slug": "nintendo",
                  "domain": "nintendo.com",
                  "games_count": 9129,
                  "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
              }
          },
          {
              "id": 49792,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 13062,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 30770,
              "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7798,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 8015,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1659,
              "image_background": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg"
          },
          {
              "id": 468,
              "name": "role-playing",
              "slug": "role-playing",
              "language": "eng",
              "games_count": 1623,
              "image_background": "https://media.rawg.io/media/games/fae/faebf3c8cbf30db3f46bfbecf6ada3d6.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 1045,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 121,
              "name": "Character Customization",
              "slug": "character-customization",
              "language": "eng",
              "games_count": 5821,
              "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
          },
          {
              "id": 40,
              "name": "Dark Fantasy",
              "slug": "dark-fantasy",
              "language": "eng",
              "games_count": 5037,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 66,
              "name": "Medieval",
              "slug": "medieval",
              "language": "eng",
              "games_count": 7383,
              "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
          },
          {
              "id": 82,
              "name": "Magic",
              "slug": "magic",
              "language": "eng",
              "games_count": 10552,
              "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
          },
          {
              "id": 205,
              "name": "Lore-Rich",
              "slug": "lore-rich",
              "language": "eng",
              "games_count": 1807,
              "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
          },
          {
              "id": 215,
              "name": "Dragons",
              "slug": "dragons",
              "language": "eng",
              "games_count": 2763,
              "image_background": "https://media.rawg.io/media/games/c88/c88c0929d09ec9270ca1207a0838c202.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 118307,
              "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
          },
          {
              "id": 118308,
              "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
          },
          {
              "id": 118309,
              "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
          },
          {
              "id": 118310,
              "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
          },
          {
              "id": 118311,
              "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
          },
          {
              "id": 118312,
              "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
          }
      ]
  },
  {
      "id": 28,
      "slug": "red-dead-redemption-2",
      "name": "Red Dead Redemption 2",
      "released": "2018-10-26",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      "rating": 4.59,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 3935,
              "percent": 73.58
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 958,
              "percent": 17.91
          },
          {
              "id": 3,
              "title": "meh",
              "count": 292,
              "percent": 5.46
          },
          {
              "id": 1,
              "title": "skip",
              "count": 163,
              "percent": 3.05
          }
      ],
      "ratings_count": 5228,
      "reviews_text_count": 84,
      "added": 16303,
      "added_by_status": {
          "yet": 985,
          "owned": 8616,
          "beaten": 3380,
          "toplay": 1644,
          "dropped": 733,
          "playing": 945
      },
      "metacritic": 96,
      "playtime": 21,
      "suggestions_count": 623,
      "updated": "2025-05-03T18:36:11",
      "user_game": null,
      "reviews_count": 5348,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2018-10-26",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2018-10-26",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2018-10-26",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          }
      ],
      "stores": [
          {
              "id": 257732,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 374316,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          },
          {
              "id": 384218,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 48782,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 13062,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 26559,
              "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7798,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 34,
              "name": "Violent",
              "slug": "violent",
              "language": "eng",
              "games_count": 7305,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 150,
              "name": "Third-Person Shooter",
              "slug": "third-person-shooter",
              "language": "eng",
              "games_count": 3875,
              "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          {
              "id": 157,
              "name": "PvP",
              "slug": "pvp",
              "language": "eng",
              "games_count": 10910,
              "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
          },
          {
              "id": 40837,
              "name": "In-App Purchases",
              "slug": "in-app-purchases",
              "language": "eng",
              "games_count": 3094,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 192,
              "name": "Mature",
              "slug": "mature",
              "language": "eng",
              "games_count": 4050,
              "image_background": "https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg"
          },
          {
              "id": 77,
              "name": "Realistic",
              "slug": "realistic",
              "language": "eng",
              "games_count": 7765,
              "image_background": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg"
          },
          {
              "id": 89,
              "name": "Historical",
              "slug": "historical",
              "language": "eng",
              "games_count": 3672,
              "image_background": "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg"
          },
          {
              "id": 110,
              "name": "Cinematic",
              "slug": "cinematic",
              "language": "eng",
              "games_count": 2862,
              "image_background": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg"
          },
          {
              "id": 144,
              "name": "Crime",
              "slug": "crime",
              "language": "eng",
              "games_count": 3089,
              "image_background": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
          },
          {
              "id": 45878,
              "name": "Online PvP",
              "slug": "online-pvp",
              "language": "eng",
              "games_count": 5649,
              "image_background": "https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg"
          },
          {
              "id": 478,
              "name": "3rd-Person Perspective",
              "slug": "3rd-person-perspective",
              "language": "eng",
              "games_count": 87,
              "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
          },
          {
              "id": 270,
              "name": "Blood",
              "slug": "blood",
              "language": "eng",
              "games_count": 2114,
              "image_background": "https://media.rawg.io/media/screenshots/570/5704316c673fab6994db582e0f43f924.jpg"
          },
          {
              "id": 78,
              "name": "America",
              "slug": "america",
              "language": "eng",
              "games_count": 857,
              "image_background": "https://media.rawg.io/media/games/6d2/6d27cf9c22f2b28cf3ae706464d138f9.jpg"
          },
          {
              "id": 578,
              "name": "Masterpiece",
              "slug": "masterpiece",
              "language": "eng",
              "games_count": 302,
              "image_background": "https://media.rawg.io/media/screenshots/b20/b20a30ae9d910d948a24ca234eb4553d.jpg"
          },
          {
              "id": 577,
              "name": "Beautiful",
              "slug": "beautiful",
              "language": "eng",
              "games_count": 1872,
              "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
          },
          {
              "id": 181,
              "name": "Hunting",
              "slug": "hunting",
              "language": "eng",
              "games_count": 1032,
              "image_background": "https://media.rawg.io/media/screenshots/327/327e3b77e7a89ce5b6da47fb9c4588cd.jpg"
          },
          {
              "id": 152,
              "name": "Western",
              "slug": "western",
              "language": "eng",
              "games_count": 1370,
              "image_background": "https://media.rawg.io/media/screenshots/c9a/c9aabb4ee4d92a2f01660bb4bcf2c571.jpg"
          },
          {
              "id": 5452,
              "name": "3rd-person",
              "slug": "3rd-person",
              "language": "eng",
              "games_count": 93,
              "image_background": "https://media.rawg.io/media/screenshots/fa7/fa74edcad003d71d5406a0b8976a5b88.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 778173,
              "image": "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg"
          },
          {
              "id": 778174,
              "image": "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg"
          },
          {
              "id": 778175,
              "image": "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg"
          },
          {
              "id": 778176,
              "image": "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg"
          },
          {
              "id": 778177,
              "image": "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg"
          },
          {
              "id": 778178,
              "image": "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
          }
      ]
  },
  {
      "id": 4062,
      "slug": "bioshock-infinite",
      "name": "BioShock Infinite",
      "released": "2013-03-26",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      "rating": 4.38,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 2281,
              "percent": 54.99
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1389,
              "percent": 33.49
          },
          {
              "id": 3,
              "title": "meh",
              "count": 362,
              "percent": 8.73
          },
          {
              "id": 1,
              "title": "skip",
              "count": 116,
              "percent": 2.8
          }
      ],
      "ratings_count": 4106,
      "reviews_text_count": 25,
      "added": 15904,
      "added_by_status": {
          "yet": 846,
          "owned": 9591,
          "beaten": 4418,
          "toplay": 431,
          "dropped": 517,
          "playing": 101
      },
      "metacritic": 94,
      "playtime": 12,
      "suggestions_count": 612,
      "updated": "2025-05-03T03:34:53",
      "user_game": null,
      "reviews_count": 4148,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo Switch",
                  "slug": "nintendo-switch",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5626,
                  "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
                  "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
              }
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2013-03-26",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo",
                  "slug": "nintendo"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 828870,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          },
          {
              "id": 71727,
              "store": {
                  "id": 4,
                  "name": "App Store",
                  "slug": "apple-appstore",
                  "domain": "apps.apple.com",
                  "games_count": 75582,
                  "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
              }
          },
          {
              "id": 440409,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 461035,
              "store": {
                  "id": 6,
                  "name": "Nintendo Store",
                  "slug": "nintendo",
                  "domain": "nintendo.com",
                  "games_count": 9129,
                  "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
              }
          },
          {
              "id": 4382,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 13084,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 33810,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 30770,
              "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 115,
              "name": "Controller",
              "slug": "controller",
              "language": "eng",
              "games_count": 13561,
              "image_background": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
          },
          {
              "id": 119,
              "name": "Dystopian",
              "slug": "dystopian",
              "language": "eng",
              "games_count": 2449,
              "image_background": "https://media.rawg.io/media/screenshots/ca0/ca06700d8184f451b99396c23b4ffbe4.jpg"
          },
          {
              "id": 305,
              "name": "Linear",
              "slug": "linear",
              "language": "eng",
              "games_count": 8203,
              "image_background": "https://media.rawg.io/media/games/395/395ad028483d6cd9076b746a3eec993d.jpg"
          },
          {
              "id": 154,
              "name": "Steampunk",
              "slug": "steampunk",
              "language": "eng",
              "games_count": 1286,
              "image_background": "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg"
          },
          {
              "id": 208,
              "name": "Alternate History",
              "slug": "alternate-history",
              "language": "eng",
              "games_count": 2034,
              "image_background": "https://media.rawg.io/media/games/c14/c14d85f2ec10e82e3d5cd837c9c0a56d.jpg"
          },
          {
              "id": 317,
              "name": "Time Travel",
              "slug": "time-travel",
              "language": "eng",
              "games_count": 1916,
              "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
          },
          {
              "id": 287,
              "name": "Political",
              "slug": "political",
              "language": "eng",
              "games_count": 699,
              "image_background": "https://media.rawg.io/media/screenshots/f93/f93ee651619bb5b273f1b51528ee872a.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
          },
          {
              "id": 98549,
              "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
          },
          {
              "id": 98550,
              "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
          },
          {
              "id": 98551,
              "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
          },
          {
              "id": 98552,
              "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
          },
          {
              "id": 98553,
              "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
          },
          {
              "id": 98554,
              "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
          }
      ]
  },
  {
      "id": 13537,
      "slug": "half-life-2",
      "name": "Half-Life 2",
      "released": "2004-11-16",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      "rating": 4.48,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 2535,
              "percent": 63.61
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1086,
              "percent": 27.25
          },
          {
              "id": 3,
              "title": "meh",
              "count": 231,
              "percent": 5.8
          },
          {
              "id": 1,
              "title": "skip",
              "count": 133,
              "percent": 3.34
          }
      ],
      "ratings_count": 3960,
      "reviews_text_count": 17,
      "added": 15821,
      "added_by_status": {
          "yet": 704,
          "owned": 10277,
          "beaten": 3839,
          "toplay": 329,
          "dropped": 574,
          "playing": 98
      },
      "metacritic": 96,
      "playtime": 7,
      "suggestions_count": 566,
      "updated": "2025-05-03T02:44:49",
      "user_game": null,
      "reviews_count": 3985,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2004-11-16",
              "requirements_en": {
                  "minimum": "Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space"
              },
              "requirements_ru": {
                  "minimum": "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
                  "recommended": "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2004-11-16",
              "requirements_en": {
                  "minimum": "Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2004-11-16",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2004-11-16",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 80,
                  "name": "Xbox",
                  "slug": "xbox-old",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 741,
                  "image_background": "https://media.rawg.io/media/games/74c/74ca0ec569682a150f3c6f9f661fb6a5.jpg"
              },
              "released_at": "2004-11-16",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 21,
                  "name": "Android",
                  "slug": "android",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 52433,
                  "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
              },
              "released_at": "2004-11-16",
              "requirements_en": {
                  "minimum": "4.4 and up"
              },
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 8,
                  "name": "Android",
                  "slug": "android"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 14891,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 41441,
              "store": {
                  "id": 8,
                  "name": "Google Play",
                  "slug": "google-play",
                  "domain": "play.google.com",
                  "games_count": 17110,
                  "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 13062,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 16,
              "name": "Horror",
              "slug": "horror",
              "language": "eng",
              "games_count": 47125,
              "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1817,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 63,
              "name": "Zombies",
              "slug": "zombies",
              "language": "eng",
              "games_count": 10835,
              "image_background": "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 1045,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 40833,
              "name": "Captions available",
              "slug": "captions-available",
              "language": "eng",
              "games_count": 1443,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 114,
              "name": "Physics",
              "slug": "physics",
              "language": "eng",
              "games_count": 20589,
              "image_background": "https://media.rawg.io/media/games/96a/96a48ac7487d9db9179d83170afcb16a.jpg"
          },
          {
              "id": 172,
              "name": "Aliens",
              "slug": "aliens",
              "language": "eng",
              "games_count": 7230,
              "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
          },
          {
              "id": 119,
              "name": "Dystopian",
              "slug": "dystopian",
              "language": "eng",
              "games_count": 2449,
              "image_background": "https://media.rawg.io/media/screenshots/ca0/ca06700d8184f451b99396c23b4ffbe4.jpg"
          },
          {
              "id": 40839,
              "name": "Includes Source SDK",
              "slug": "includes-source-sdk",
              "language": "eng",
              "games_count": 63,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
          },
          {
              "id": 319,
              "name": "Silent Protagonist",
              "slug": "silent-protagonist",
              "language": "eng",
              "games_count": 105,
              "image_background": "https://media.rawg.io/media/games/d54/d54f0267a042f44c032d8ca264584ecf.jpg"
          },
          {
              "id": 62349,
              "name": "vr mod",
              "slug": "vr-mod",
              "language": "eng",
              "games_count": 17,
              "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
          },
          {
              "id": 115804,
              "image": "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg"
          },
          {
              "id": 115805,
              "image": "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg"
          },
          {
              "id": 115806,
              "image": "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg"
          },
          {
              "id": 115807,
              "image": "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg"
          },
          {
              "id": 115808,
              "image": "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg"
          },
          {
              "id": 115809,
              "image": "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
          }
      ]
  },
  {
      "id": 802,
      "slug": "borderlands-2",
      "name": "Borderlands 2",
      "released": "2012-09-18",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
      "rating": 4.01,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1565,
              "percent": 47.99
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 1004,
              "percent": 30.79
          },
          {
              "id": 3,
              "title": "meh",
              "count": 557,
              "percent": 17.08
          },
          {
              "id": 1,
              "title": "skip",
              "count": 135,
              "percent": 4.14
          }
      ],
      "ratings_count": 3241,
      "reviews_text_count": 12,
      "added": 15774,
      "added_by_status": {
          "yet": 631,
          "owned": 11006,
          "beaten": 2360,
          "toplay": 244,
          "dropped": 1316,
          "playing": 217
      },
      "metacritic": 89,
      "playtime": 11,
      "suggestions_count": 699,
      "updated": "2025-05-03T03:35:13",
      "user_game": null,
      "reviews_count": 3261,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
                  "recommended": "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение"
              }
          },
          {
              "platform": {
                  "id": 21,
                  "name": "Android",
                  "slug": "android",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 52433,
                  "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 19,
                  "name": "PS Vita",
                  "slug": "ps-vita",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 1453,
                  "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2012-09-18",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 8,
                  "name": "Android",
                  "slug": "android"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 59528,
              "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
          }
      ],
      "stores": [
          {
              "id": 4000,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 213037,
              "store": {
                  "id": 8,
                  "name": "Google Play",
                  "slug": "google-play",
                  "domain": "play.google.com",
                  "games_count": 17110,
                  "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
              }
          },
          {
              "id": 11088,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 34042,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          },
          {
              "id": 71617,
              "store": {
                  "id": 4,
                  "name": "App Store",
                  "slug": "apple-appstore",
                  "domain": "apps.apple.com",
                  "games_count": 75582,
                  "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
              }
          },
          {
              "id": 817,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 27158,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13806,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 8015,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 167,
              "name": "Futuristic",
              "slug": "futuristic",
              "language": "eng",
              "games_count": 6279,
              "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
          },
          {
              "id": 120,
              "name": "Memes",
              "slug": "memes",
              "language": "eng",
              "games_count": 2031,
              "image_background": "https://media.rawg.io/media/games/efd/efd6b2cb621c41a2b6580d8ac260b8ba.jpg"
          },
          {
              "id": 166,
              "name": "Stylized",
              "slug": "stylized",
              "language": "eng",
              "games_count": 8556,
              "image_background": "https://media.rawg.io/media/screenshots/30f/30fe09ca354adfd72aeb47b34dbf153a.jpg"
          },
          {
              "id": 148,
              "name": "Dark Humor",
              "slug": "dark-humor",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
          },
          {
              "id": 98,
              "name": "Loot",
              "slug": "loot",
              "language": "eng",
              "games_count": 2613,
              "image_background": "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 7041,
              "image": "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg"
          },
          {
              "id": 7062,
              "image": "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg"
          },
          {
              "id": 7070,
              "image": "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg"
          },
          {
              "id": 7072,
              "image": "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg"
          },
          {
              "id": 7081,
              "image": "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg"
          },
          {
              "id": 7088,
              "image": "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
          }
      ]
  },
  {
      "id": 3439,
      "slug": "life-is-strange-episode-1-2",
      "name": "Life is Strange",
      "released": "2015-01-29",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      "rating": 4.12,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 1641,
              "percent": 43.76
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1374,
              "percent": 36.64
          },
          {
              "id": 3,
              "title": "meh",
              "count": 498,
              "percent": 13.28
          },
          {
              "id": 1,
              "title": "skip",
              "count": 237,
              "percent": 6.32
          }
      ],
      "ratings_count": 3703,
      "reviews_text_count": 31,
      "added": 15745,
      "added_by_status": {
          "yet": 795,
          "owned": 10289,
          "beaten": 3486,
          "toplay": 366,
          "dropped": 657,
          "playing": 152
      },
      "metacritic": 83,
      "playtime": 6,
      "suggestions_count": 560,
      "updated": "2025-04-29T09:08:31",
      "user_game": null,
      "reviews_count": 3750,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 3,
                  "name": "iOS",
                  "slug": "ios",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 77395,
                  "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": {
                  "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 21,
                  "name": "Android",
                  "slug": "android",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 52433,
                  "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": {
                  "minimum": "6.0 and up"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2015-01-29",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 4,
                  "name": "iOS",
                  "slug": "ios"
              }
          },
          {
              "platform": {
                  "id": 8,
                  "name": "Android",
                  "slug": "android"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 146826,
              "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
          }
      ],
      "stores": [
          {
              "id": 451321,
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog",
                  "domain": "gog.com",
                  "games_count": 6733,
                  "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
              }
          },
          {
              "id": 3702,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 35603,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 35602,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 217695,
              "store": {
                  "id": 8,
                  "name": "Google Play",
                  "slug": "google-play",
                  "domain": "play.google.com",
                  "games_count": 17110,
                  "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
              }
          },
          {
              "id": 245823,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          },
          {
              "id": 44714,
              "store": {
                  "id": 4,
                  "name": "App Store",
                  "slug": "apple-appstore",
                  "domain": "apps.apple.com",
                  "games_count": 75582,
                  "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 189,
              "name": "Female Protagonist",
              "slug": "female-protagonist",
              "language": "eng",
              "games_count": 14195,
              "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
          },
          {
              "id": 41,
              "name": "Dark",
              "slug": "dark",
              "language": "eng",
              "games_count": 17428,
              "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
          },
          {
              "id": 141,
              "name": "Point & Click",
              "slug": "point-click",
              "language": "eng",
              "games_count": 14461,
              "image_background": "https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg"
          },
          {
              "id": 117,
              "name": "Mystery",
              "slug": "mystery",
              "language": "eng",
              "games_count": 15168,
              "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
          },
          {
              "id": 111,
              "name": "Short",
              "slug": "short",
              "language": "eng",
              "games_count": 57982,
              "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
          },
          {
              "id": 145,
              "name": "Choices Matter",
              "slug": "choices-matter",
              "language": "eng",
              "games_count": 7087,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 120,
              "name": "Memes",
              "slug": "memes",
              "language": "eng",
              "games_count": 2031,
              "image_background": "https://media.rawg.io/media/games/efd/efd6b2cb621c41a2b6580d8ac260b8ba.jpg"
          },
          {
              "id": 91,
              "name": "Walking Simulator",
              "slug": "walking-simulator",
              "language": "eng",
              "games_count": 8139,
              "image_background": "https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg"
          },
          {
              "id": 218,
              "name": "Multiple Endings",
              "slug": "multiple-endings",
              "language": "eng",
              "games_count": 10366,
              "image_background": "https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg"
          },
          {
              "id": 406,
              "name": "Story",
              "slug": "story",
              "language": "eng",
              "games_count": 11502,
              "image_background": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg"
          },
          {
              "id": 232,
              "name": "Episodic",
              "slug": "episodic",
              "language": "eng",
              "games_count": 500,
              "image_background": "https://media.rawg.io/media/screenshots/72c/72c1405b3524e40c44c7860f2b5fa7f9.jpg"
          },
          {
              "id": 295,
              "name": "Soundtrack",
              "slug": "soundtrack",
              "language": "eng",
              "games_count": 3200,
              "image_background": "https://media.rawg.io/media/games/958/9582b5acfecaefac5875fa13e5901081.jpg"
          },
          {
              "id": 317,
              "name": "Time Travel",
              "slug": "time-travel",
              "language": "eng",
              "games_count": 1916,
              "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
          },
          {
              "id": 302,
              "name": "Time Manipulation",
              "slug": "time-manipulation",
              "language": "eng",
              "games_count": 673,
              "image_background": "https://media.rawg.io/media/screenshots/30f/30fe09ca354adfd72aeb47b34dbf153a.jpg"
          },
          {
              "id": 992,
              "name": "student",
              "slug": "student",
              "language": "eng",
              "games_count": 1530,
              "image_background": "https://media.rawg.io/media/screenshots/fb2/fb210147a46c1d4ecba72f45115a8948.jpg"
          },
          {
              "id": 2682,
              "name": "strange",
              "slug": "strange",
              "language": "eng",
              "games_count": 333,
              "image_background": "https://media.rawg.io/media/screenshots/f48/f48af1368eb7bbed7a8846bd06294670.jpg"
          },
          {
              "id": 3197,
              "name": "photography",
              "slug": "photography",
              "language": "eng",
              "games_count": 205,
              "image_background": "https://media.rawg.io/media/screenshots/985/98500c4fb5ca603c1ce2e0a3cd6cf866.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 1826487,
              "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
          },
          {
              "id": 1826488,
              "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
          },
          {
              "id": 1826489,
              "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
          },
          {
              "id": 1826490,
              "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
          },
          {
              "id": 1826491,
              "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
          },
          {
              "id": 1826492,
              "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
          }
      ]
  },
  {
      "id": 4286,
      "slug": "bioshock",
      "name": "BioShock",
      "released": "2007-08-21",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      "rating": 4.36,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 1763,
              "percent": 52.72
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1224,
              "percent": 36.6
          },
          {
              "id": 3,
              "title": "meh",
              "count": 251,
              "percent": 7.51
          },
          {
              "id": 1,
              "title": "skip",
              "count": 106,
              "percent": 3.17
          }
      ],
      "ratings_count": 3301,
      "reviews_text_count": 26,
      "added": 14580,
      "added_by_status": {
          "yet": 647,
          "owned": 9498,
          "beaten": 3243,
          "toplay": 340,
          "dropped": 740,
          "playing": 112
      },
      "metacritic": 96,
      "playtime": 3,
      "suggestions_count": 659,
      "updated": "2025-05-03T03:35:11",
      "user_game": null,
      "reviews_count": 3344,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2007-08-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2007-08-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2007-08-21",
              "requirements_en": {
                  "minimum": "<h2 class=\"bb_tag\"><strong>Minimum: </strong></h2><ul class=\"bb_ul\"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>",
                  "recommended": "<h2 class=\"bb_tag\"><strong>Recommended: </strong></h2><ul class=\"bb_ul\"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
                  "recommended": "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение"
              }
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2007-08-21",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 4614,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 79531,
              "store": {
                  "id": 4,
                  "name": "App Store",
                  "slug": "apple-appstore",
                  "domain": "apps.apple.com",
                  "games_count": 75582,
                  "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
              }
          },
          {
              "id": 440407,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 20580,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 33844,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 13062,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 16,
              "name": "Horror",
              "slug": "horror",
              "language": "eng",
              "games_count": 47125,
              "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1817,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 8015,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 41,
              "name": "Dark",
              "slug": "dark",
              "language": "eng",
              "games_count": 17428,
              "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
          },
          {
              "id": 119,
              "name": "Dystopian",
              "slug": "dystopian",
              "language": "eng",
              "games_count": 2449,
              "image_background": "https://media.rawg.io/media/screenshots/ca0/ca06700d8184f451b99396c23b4ffbe4.jpg"
          },
          {
              "id": 154,
              "name": "Steampunk",
              "slug": "steampunk",
              "language": "eng",
              "games_count": 1286,
              "image_background": "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg"
          },
          {
              "id": 208,
              "name": "Alternate History",
              "slug": "alternate-history",
              "language": "eng",
              "games_count": 2034,
              "image_background": "https://media.rawg.io/media/games/c14/c14d85f2ec10e82e3d5cd837c9c0a56d.jpg"
          },
          {
              "id": 287,
              "name": "Political",
              "slug": "political",
              "language": "eng",
              "games_count": 699,
              "image_background": "https://media.rawg.io/media/screenshots/f93/f93ee651619bb5b273f1b51528ee872a.jpg"
          },
          {
              "id": 250,
              "name": "Underwater",
              "slug": "underwater",
              "language": "eng",
              "games_count": 2205,
              "image_background": "https://media.rawg.io/media/screenshots/75c/75c109a3b66c84787f137d948292c44a_DIwNRKi.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 170993,
              "image": "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg"
          },
          {
              "id": 170994,
              "image": "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg"
          },
          {
              "id": 170995,
              "image": "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg"
          },
          {
              "id": 170996,
              "image": "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg"
          },
          {
              "id": 170997,
              "image": "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg"
          },
          {
              "id": 170998,
              "image": "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
          }
      ]
  },
  {
      "id": 32,
      "slug": "destiny-2",
      "name": "Destiny 2",
      "released": "2017-09-06",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      "rating": 3.52,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1178,
              "percent": 44.19
          },
          {
              "id": 3,
              "title": "meh",
              "count": 871,
              "percent": 32.67
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 362,
              "percent": 13.58
          },
          {
              "id": 1,
              "title": "skip",
              "count": 255,
              "percent": 9.56
          }
      ],
      "ratings_count": 2640,
      "reviews_text_count": 21,
      "added": 14513,
      "added_by_status": {
          "yet": 474,
          "owned": 11080,
          "beaten": 792,
          "toplay": 175,
          "dropped": 1579,
          "playing": 413
      },
      "metacritic": 82,
      "playtime": 6,
      "suggestions_count": 1238,
      "updated": "2025-05-03T12:04:40",
      "user_game": null,
      "reviews_count": 2666,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2017-09-06",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2017-09-06",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2017-09-06",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 171,
                  "name": "Web",
                  "slug": "web",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 260078,
                  "image_background": "https://media.rawg.io/media/screenshots/0e0/0e05b5ea70efa45576d6eb42a8cdbe4d.jpg"
              },
              "released_at": "2017-09-06",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 186,
                  "name": "Xbox Series S/X",
                  "slug": "xbox-series-x",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1079,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2017-09-06",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 187,
                  "name": "PlayStation 5",
                  "slug": "playstation5",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1244,
                  "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
              },
              "released_at": "2017-09-06",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Web",
                  "slug": "web"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 837910,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          },
          {
              "id": 32,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 808,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 326831,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 26559,
              "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
          },
          {
              "id": 79,
              "name": "Free to Play",
              "slug": "free-to-play",
              "language": "eng",
              "games_count": 8573,
              "image_background": "https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg"
          },
          {
              "id": 397,
              "name": "Online multiplayer",
              "slug": "online-multiplayer",
              "language": "eng",
              "games_count": 3804,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 69,
              "name": "Action-Adventure",
              "slug": "action-adventure",
              "language": "eng",
              "games_count": 19138,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 157,
              "name": "PvP",
              "slug": "pvp",
              "language": "eng",
              "games_count": 10910,
              "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
          },
          {
              "id": 25,
              "name": "Space",
              "slug": "space",
              "language": "eng",
              "games_count": 43646,
              "image_background": "https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg"
          },
          {
              "id": 1465,
              "name": "combat",
              "slug": "combat",
              "language": "eng",
              "games_count": 14553,
              "image_background": "https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg"
          },
          {
              "id": 167,
              "name": "Futuristic",
              "slug": "futuristic",
              "language": "eng",
              "games_count": 6279,
              "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
          },
          {
              "id": 172,
              "name": "Aliens",
              "slug": "aliens",
              "language": "eng",
              "games_count": 7230,
              "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
          },
          {
              "id": 406,
              "name": "Story",
              "slug": "story",
              "language": "eng",
              "games_count": 11502,
              "image_background": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg"
          },
          {
              "id": 478,
              "name": "3rd-Person Perspective",
              "slug": "3rd-person-perspective",
              "language": "eng",
              "games_count": 87,
              "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
          },
          {
              "id": 413,
              "name": "online",
              "slug": "online",
              "language": "eng",
              "games_count": 6554,
              "image_background": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
          },
          {
              "id": 158,
              "name": "MMORPG",
              "slug": "mmorpg",
              "language": "eng",
              "games_count": 1558,
              "image_background": "https://media.rawg.io/media/screenshots/c41/c41d38ea6b8428adb64824df2a1a0a26.jpg"
          },
          {
              "id": 171,
              "name": "PvE",
              "slug": "pve",
              "language": "eng",
              "games_count": 6680,
              "image_background": "https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg"
          },
          {
              "id": 98,
              "name": "Loot",
              "slug": "loot",
              "language": "eng",
              "games_count": 2613,
              "image_background": "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg"
          },
          {
              "id": 205,
              "name": "Lore-Rich",
              "slug": "lore-rich",
              "language": "eng",
              "games_count": 1807,
              "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
          },
          {
              "id": 2030,
              "name": "city",
              "slug": "city",
              "language": "eng",
              "games_count": 9267,
              "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
          },
          {
              "id": 744,
              "name": "friends",
              "slug": "friends",
              "language": "eng",
              "games_count": 15178,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 5816,
              "name": "console",
              "slug": "console",
              "language": "eng",
              "games_count": 1390,
              "image_background": "https://media.rawg.io/media/games/faa/faa6a4a7a2e57faf2960329630aee211.jpg"
          },
          {
              "id": 578,
              "name": "Masterpiece",
              "slug": "masterpiece",
              "language": "eng",
              "games_count": 302,
              "image_background": "https://media.rawg.io/media/screenshots/b20/b20a30ae9d910d948a24ca234eb4553d.jpg"
          },
          {
              "id": 3109,
              "name": "weapons",
              "slug": "weapons",
              "language": "eng",
              "games_count": 2285,
              "image_background": "https://media.rawg.io/media/games/d51/d51ada3b94bfd617bf91d4344ab81ce9.jpg"
          },
          {
              "id": 1484,
              "name": "skill",
              "slug": "skill",
              "language": "eng",
              "games_count": 3530,
              "image_background": "https://media.rawg.io/media/games/7f9/7f965ca1406c356249ec32b081a896f6.jpg"
          },
          {
              "id": 3046,
              "name": "destroy",
              "slug": "destroy",
              "language": "eng",
              "games_count": 4618,
              "image_background": "https://media.rawg.io/media/screenshots/c84/c841102a515d24777f91b4861a84fb5b.jpg"
          },
          {
              "id": 1743,
              "name": "collect",
              "slug": "collect",
              "language": "eng",
              "games_count": 8080,
              "image_background": "https://media.rawg.io/media/screenshots/36c/36cf1f6f85217619900e8101e62bf07f.jpg"
          },
          {
              "id": 2184,
              "name": "hunt",
              "slug": "hunt",
              "language": "eng",
              "games_count": 2349,
              "image_background": "https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg"
          },
          {
              "id": 754,
              "name": "gun",
              "slug": "gun",
              "language": "eng",
              "games_count": 3216,
              "image_background": "https://media.rawg.io/media/games/23c/23c05dddf504b4990619f5aca006ce53.jpg"
          },
          {
              "id": 1527,
              "name": "rain",
              "slug": "rain",
              "language": "eng",
              "games_count": 864,
              "image_background": "https://media.rawg.io/media/screenshots/c7b/c7b6140815bc7772cdb3fd40e89fa2ab.jpg"
          },
          {
              "id": 18426,
              "name": "enemy",
              "slug": "enemy",
              "language": "eng",
              "games_count": 2582,
              "image_background": "https://media.rawg.io/media/games/075/0753492cda7ee3c9bd4a3ca673fd0c8c.jpg"
          },
          {
              "id": 691,
              "name": "quick",
              "slug": "quick",
              "language": "eng",
              "games_count": 931,
              "image_background": "https://media.rawg.io/media/screenshots/2a7/2a71e9c68b258832d1b357213f322691.jpg"
          },
          {
              "id": 2863,
              "name": "darkness",
              "slug": "darkness",
              "language": "eng",
              "games_count": 482,
              "image_background": "https://media.rawg.io/media/screenshots/5dc/5dc8a9974cfe5b46c03427601a527d10.jpg"
          },
          {
              "id": 6580,
              "name": "defender",
              "slug": "defender",
              "language": "eng",
              "games_count": 182,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          }
      ],
      "esrb_rating": {
          "id": 3,
          "name": "Teen",
          "slug": "teen"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 2629150,
              "image": "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg"
          },
          {
              "id": 2629151,
              "image": "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg"
          },
          {
              "id": 2629152,
              "image": "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg"
          },
          {
              "id": 2629153,
              "image": "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg"
          },
          {
              "id": 2629154,
              "image": "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg"
          },
          {
              "id": 2629155,
              "image": "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"
          }
      ]
  },
  {
      "id": 58175,
      "slug": "god-of-war-2",
      "name": "God of War (2018)",
      "released": "2018-04-20",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      "rating": 4.55,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 3570,
              "percent": 70.65
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 1058,
              "percent": 20.94
          },
          {
              "id": 3,
              "title": "meh",
              "count": 249,
              "percent": 4.93
          },
          {
              "id": 1,
              "title": "skip",
              "count": 176,
              "percent": 3.48
          }
      ],
      "ratings_count": 4948,
      "reviews_text_count": 73,
      "added": 14119,
      "added_by_status": {
          "yet": 705,
          "owned": 7202,
          "beaten": 4228,
          "toplay": 1195,
          "dropped": 370,
          "playing": 419
      },
      "metacritic": 94,
      "playtime": 14,
      "suggestions_count": 603,
      "updated": "2025-05-03T18:36:28",
      "user_game": null,
      "reviews_count": 5053,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 547967,
                  "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
              },
              "released_at": "2018-04-20",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2018-04-20",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186911,
              "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
          }
      ],
      "stores": [
          {
              "id": 971852,
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog",
                  "domain": "gog.com",
                  "games_count": 6733,
                  "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
              }
          },
          {
              "id": 46917,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              }
          },
          {
              "id": 677451,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 110950,
                  "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
              }
          },
          {
              "id": 677452,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239144,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45430,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21419,
              "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22047,
              "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36877,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24245,
              "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24813,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13356,
              "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 30755,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 6216,
              "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 26538,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 34,
              "name": "Violent",
              "slug": "violent",
              "language": "eng",
              "games_count": 7301,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 69,
              "name": "Action-Adventure",
              "slug": "action-adventure",
              "language": "eng",
              "games_count": 19131,
              "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 8010,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 68,
              "name": "Hack and Slash",
              "slug": "hack-and-slash",
              "language": "eng",
              "games_count": 4860,
              "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
          },
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4491,
              "image_background": "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg"
          },
          {
              "id": 571,
              "name": "3D",
              "slug": "3d",
              "language": "eng",
              "games_count": 89350,
              "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
          },
          {
              "id": 125,
              "name": "Crafting",
              "slug": "crafting",
              "language": "eng",
              "games_count": 4943,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 1465,
              "name": "combat",
              "slug": "combat",
              "language": "eng",
              "games_count": 14533,
              "image_background": "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3980,
              "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
          },
          {
              "id": 478,
              "name": "3rd-Person Perspective",
              "slug": "3rd-person-perspective",
              "language": "eng",
              "games_count": 87,
              "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
          },
          {
              "id": 270,
              "name": "Blood",
              "slug": "blood",
              "language": "eng",
              "games_count": 2114,
              "image_background": "https://media.rawg.io/media/screenshots/570/5704316c673fab6994db582e0f43f924.jpg"
          },
          {
              "id": 171,
              "name": "PvE",
              "slug": "pve",
              "language": "eng",
              "games_count": 6669,
              "image_background": "https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg"
          },
          {
              "id": 572,
              "name": "Emotional",
              "slug": "emotional",
              "language": "eng",
              "games_count": 3792,
              "image_background": "https://media.rawg.io/media/games/7ad/7adc6352280fe0e6626902e444e22195.jpg"
          },
          {
              "id": 580,
              "name": "Souls-like",
              "slug": "souls-like",
              "language": "eng",
              "games_count": 1668,
              "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
          },
          {
              "id": 108,
              "name": "Mythology",
              "slug": "mythology",
              "language": "eng",
              "games_count": 2287,
              "image_background": "https://media.rawg.io/media/screenshots/e49/e497cca0e21625b8e36614399f0b970e.jpg"
          },
          {
              "id": 43374,
              "name": "Remote Play on TV",
              "slug": "remote-play-on-tv",
              "language": "eng",
              "games_count": 555,
              "image_background": "https://media.rawg.io/media/games/59d/59d539fc7d8086ed9ea4f077c0196367.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
          },
          {
              "id": 766263,
              "image": "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg"
          },
          {
              "id": 766264,
              "image": "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg"
          },
          {
              "id": 766265,
              "image": "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg"
          },
          {
              "id": 766266,
              "image": "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg"
          },
          {
              "id": 766267,
              "image": "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg"
          },
          {
              "id": 766268,
              "image": "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg"
          }
      ]
  },
  {
      "id": 3070,
      "slug": "fallout-4",
      "name": "Fallout 4",
      "released": "2015-11-09",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      "rating": 3.81,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1631,
              "percent": 48.28
          },
          {
              "id": 3,
              "title": "meh",
              "count": 871,
              "percent": 25.78
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 713,
              "percent": 21.11
          },
          {
              "id": 1,
              "title": "skip",
              "count": 163,
              "percent": 4.83
          }
      ],
      "ratings_count": 3347,
      "reviews_text_count": 21,
      "added": 14070,
      "added_by_status": {
          "yet": 638,
          "owned": 8968,
          "beaten": 2346,
          "toplay": 438,
          "dropped": 1357,
          "playing": 323
      },
      "metacritic": 84,
      "playtime": 38,
      "suggestions_count": 463,
      "updated": "2025-04-30T08:24:19",
      "user_game": null,
      "reviews_count": 3378,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2015-11-09",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2015-11-09",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 187,
                  "name": "PlayStation 5",
                  "slug": "playstation5",
                  "image": null,
                  "year_end": null,
                  "year_start": 2020,
                  "games_count": 1244,
                  "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
              },
              "released_at": "2015-11-09",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2015-11-09",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 59528,
              "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
          }
      ],
      "stores": [
          {
              "id": 3252,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 9047,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 13248,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 22082,
              "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 24271,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 24838,
              "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8544,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 13372,
              "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 20845,
              "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 26559,
              "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7798,
              "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
              "id": 1,
              "name": "Survival",
              "slug": "survival",
              "language": "eng",
              "games_count": 9940,
              "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 8015,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 150,
              "name": "Third-Person Shooter",
              "slug": "third-person-shooter",
              "language": "eng",
              "games_count": 3875,
              "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
          },
          {
              "id": 43,
              "name": "Post-apocalyptic",
              "slug": "post-apocalyptic",
              "language": "eng",
              "games_count": 4523,
              "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
          },
          {
              "id": 27994,
              "image": "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg"
          },
          {
              "id": 27996,
              "image": "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg"
          },
          {
              "id": 28000,
              "image": "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg"
          },
          {
              "id": 28002,
              "image": "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg"
          },
          {
              "id": 28004,
              "image": "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg"
          },
          {
              "id": 28006,
              "image": "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
          }
      ]
  },
  {
      "id": 3939,
      "slug": "payday-2",
      "name": "PAYDAY 2",
      "released": "2013-08-13",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      "rating": 3.52,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1148,
              "percent": 51.62
          },
          {
              "id": 3,
              "title": "meh",
              "count": 610,
              "percent": 27.43
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 234,
              "percent": 10.52
          },
          {
              "id": 1,
              "title": "skip",
              "count": 232,
              "percent": 10.43
          }
      ],
      "ratings_count": 2206,
      "reviews_text_count": 14,
      "added": 14066,
      "added_by_status": {
          "yet": 505,
          "owned": 11042,
          "beaten": 828,
          "toplay": 109,
          "dropped": 1460,
          "playing": 122
      },
      "metacritic": 79,
      "playtime": 9,
      "suggestions_count": 434,
      "updated": "2025-04-29T09:11:42",
      "user_game": null,
      "reviews_count": 2224,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2013-08-13",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2013-08-13",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 7<br>\t</li><li><strong>Processor:</strong>2 GHz Intel Dual Core Processor<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (512MB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>31 GB HD space <br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 10<br>\t</li><li><strong>Processor:</strong>2.3 GHz Intel Quad Core Processor<br>\t</li><li><strong>Memory:</strong>8 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (1GB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>45 GB HD space<br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2013-08-13",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 961005,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          },
          {
              "id": 4258,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 10780,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 27939,
              "store": {
                  "id": 6,
                  "name": "Nintendo Store",
                  "slug": "nintendo",
                  "domain": "nintendo.com",
                  "games_count": 9129,
                  "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
              }
          },
          {
              "id": 34027,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3427,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 27158,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 15,
              "name": "Stealth",
              "slug": "stealth",
              "language": "eng",
              "games_count": 6756,
              "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5955,
              "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
          },
          {
              "id": 40837,
              "name": "In-App Purchases",
              "slug": "in-app-purchases",
              "language": "eng",
              "games_count": 3094,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1880,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 144,
              "name": "Crime",
              "slug": "crime",
              "language": "eng",
              "games_count": 3089,
              "image_background": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
          },
          {
              "id": 171,
              "name": "PvE",
              "slug": "pve",
              "language": "eng",
              "games_count": 6680,
              "image_background": "https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg"
          },
          {
              "id": 216,
              "name": "Heist",
              "slug": "heist",
              "language": "eng",
              "games_count": 570,
              "image_background": "https://media.rawg.io/media/games/b50/b501727147644474562935f19a60134e.jpg"
          },
          {
              "id": 274,
              "name": "Gun Customization",
              "slug": "gun-customization",
              "language": "eng",
              "games_count": 730,
              "image_background": "https://media.rawg.io/media/games/075/0753492cda7ee3c9bd4a3ca673fd0c8c.jpg"
          }
      ],
      "esrb_rating": {
          "id": 5,
          "name": "Adults Only",
          "slug": "adults-only"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 74194,
              "image": "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg"
          },
          {
              "id": 74195,
              "image": "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg"
          },
          {
              "id": 74196,
              "image": "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg"
          },
          {
              "id": 74197,
              "image": "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg"
          },
          {
              "id": 74198,
              "image": "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg"
          },
          {
              "id": 74199,
              "image": "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
          }
      ]
  },
  {
      "id": 1030,
      "slug": "limbo",
      "name": "Limbo",
      "released": "2010-07-21",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      "rating": 4.14,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1771,
              "percent": 52.63
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 1148,
              "percent": 34.12
          },
          {
              "id": 3,
              "title": "meh",
              "count": 335,
              "percent": 9.96
          },
          {
              "id": 1,
              "title": "skip",
              "count": 111,
              "percent": 3.3
          }
      ],
      "ratings_count": 3326,
      "reviews_text_count": 27,
      "added": 13949,
      "added_by_status": {
          "yet": 574,
          "owned": 8922,
          "beaten": 3310,
          "toplay": 320,
          "dropped": 726,
          "playing": 97
      },
      "metacritic": 88,
      "playtime": 3,
      "suggestions_count": 199,
      "updated": "2025-05-01T14:31:55",
      "user_game": null,
      "reviews_count": 3365,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2024-11-01",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS *:</strong> Windows 7(SP1+) and above<br></li><li><strong>Processor:</strong> x64 or x86<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 600 MB available space</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
                  "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
              }
          },
          {
              "platform": {
                  "id": 21,
                  "name": "Android",
                  "slug": "android",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 52433,
                  "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": {
                  "minimum": "4.4 and up"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 19,
                  "name": "PS Vita",
                  "slug": "ps-vita",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 1453,
                  "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 6919,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 3167,
                  "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 14,
                  "name": "Xbox 360",
                  "slug": "xbox360",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 2805,
                  "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": {
                  "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": {
                  "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 3,
                  "name": "iOS",
                  "slug": "ios",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 77395,
                  "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": {
                  "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 1,
                  "name": "Xbox One",
                  "slug": "xbox-one",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5696,
                  "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": null,
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo Switch",
                  "slug": "nintendo-switch",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 5626,
                  "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
              },
              "released_at": "2010-07-21",
              "requirements_en": null,
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          },
          {
              "platform": {
                  "id": 3,
                  "name": "Xbox",
                  "slug": "xbox"
              }
          },
          {
              "platform": {
                  "id": 4,
                  "name": "iOS",
                  "slug": "ios"
              }
          },
          {
              "platform": {
                  "id": 8,
                  "name": "Android",
                  "slug": "android"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          },
          {
              "platform": {
                  "id": 7,
                  "name": "Nintendo",
                  "slug": "nintendo"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 146826,
              "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
          },
          {
              "id": 51,
              "name": "Indie",
              "slug": "indie",
              "games_count": 77565,
              "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
          },
          {
              "id": 7,
              "name": "Puzzle",
              "slug": "puzzle",
              "games_count": 97335,
              "image_background": "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg"
          },
          {
              "id": 83,
              "name": "Platformer",
              "slug": "platformer",
              "games_count": 100873,
              "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
          }
      ],
      "stores": [
          {
              "id": 1054,
              "store": {
                  "id": 4,
                  "name": "App Store",
                  "slug": "apple-appstore",
                  "domain": "apps.apple.com",
                  "games_count": 75582,
                  "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
              }
          },
          {
              "id": 3679,
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store",
                  "domain": "store.playstation.com",
                  "games_count": 8040,
                  "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
              }
          },
          {
              "id": 7493,
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store",
                  "domain": "microsoft.com",
                  "games_count": 4926,
                  "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              }
          },
          {
              "id": 10311,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          },
          {
              "id": 26852,
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog",
                  "domain": "gog.com",
                  "games_count": 6733,
                  "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
              }
          },
          {
              "id": 33137,
              "store": {
                  "id": 7,
                  "name": "Xbox 360 Store",
                  "slug": "xbox360",
                  "domain": "marketplace.xbox.com",
                  "games_count": 1915,
                  "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
              }
          },
          {
              "id": 49142,
              "store": {
                  "id": 6,
                  "name": "Nintendo Store",
                  "slug": "nintendo",
                  "domain": "nintendo.com",
                  "games_count": 9129,
                  "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
              }
          },
          {
              "id": 40035,
              "store": {
                  "id": 8,
                  "name": "Google Play",
                  "slug": "google-play",
                  "domain": "play.google.com",
                  "games_count": 17110,
                  "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
              }
          },
          {
              "id": 335541,
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games",
                  "domain": "epicgames.com",
                  "games_count": 1387,
                  "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 239234,
              "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 21435,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 36888,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 45,
              "name": "2D",
              "slug": "2d",
              "language": "eng",
              "games_count": 202418,
              "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
          },
          {
              "id": 16,
              "name": "Horror",
              "slug": "horror",
              "language": "eng",
              "games_count": 47125,
              "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
          },
          {
              "id": 49,
              "name": "Difficult",
              "slug": "difficult",
              "language": "eng",
              "games_count": 13886,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 69,
              "name": "Action-Adventure",
              "slug": "action-adventure",
              "language": "eng",
              "games_count": 19138,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 122,
              "name": "Pixel Graphics",
              "slug": "pixel-graphics",
              "language": "eng",
              "games_count": 96775,
              "image_background": "https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg"
          },
          {
              "id": 115,
              "name": "Controller",
              "slug": "controller",
              "language": "eng",
              "games_count": 13561,
              "image_background": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
          },
          {
              "id": 41,
              "name": "Dark",
              "slug": "dark",
              "language": "eng",
              "games_count": 17428,
              "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
          },
          {
              "id": 336,
              "name": "controller support",
              "slug": "controller-support",
              "language": "eng",
              "games_count": 293,
              "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
          },
          {
              "id": 111,
              "name": "Short",
              "slug": "short",
              "language": "eng",
              "games_count": 57982,
              "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
          },
          {
              "id": 40,
              "name": "Dark Fantasy",
              "slug": "dark-fantasy",
              "language": "eng",
              "games_count": 5037,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 114,
              "name": "Physics",
              "slug": "physics",
              "language": "eng",
              "games_count": 20589,
              "image_background": "https://media.rawg.io/media/games/96a/96a48ac7487d9db9179d83170afcb16a.jpg"
          },
          {
              "id": 113,
              "name": "Side Scroller",
              "slug": "side-scroller",
              "language": "eng",
              "games_count": 11260,
              "image_background": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg"
          },
          {
              "id": 110,
              "name": "Cinematic",
              "slug": "cinematic",
              "language": "eng",
              "games_count": 2862,
              "image_background": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg"
          },
          {
              "id": 1465,
              "name": "combat",
              "slug": "combat",
              "language": "eng",
              "games_count": 14553,
              "image_background": "https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg"
          },
          {
              "id": 305,
              "name": "Linear",
              "slug": "linear",
              "language": "eng",
              "games_count": 8203,
              "image_background": "https://media.rawg.io/media/games/395/395ad028483d6cd9076b746a3eec993d.jpg"
          },
          {
              "id": 46,
              "name": "Surreal",
              "slug": "surreal",
              "language": "eng",
              "games_count": 6074,
              "image_background": "https://media.rawg.io/media/games/6ac/6ac602e70c837ababdf025e997391d9c.jpg"
          },
          {
              "id": 83,
              "name": "Puzzle-Platformer",
              "slug": "puzzle-platformer",
              "language": "eng",
              "games_count": 9498,
              "image_background": "https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg"
          },
          {
              "id": 112,
              "name": "Minimalist",
              "slug": "minimalist",
              "language": "eng",
              "games_count": 16433,
              "image_background": "https://media.rawg.io/media/games/5f2/5f25cf08217b40b9d8f02f95db1fdc1d.jpg"
          },
          {
              "id": 135,
              "name": "2D Fighter",
              "slug": "2d-fighter",
              "language": "eng",
              "games_count": 1454,
              "image_background": "https://media.rawg.io/media/games/416/4164ca654a339af5be8e63cc9c480c70.jpg"
          },
          {
              "id": 289,
              "name": "Noir",
              "slug": "noir",
              "language": "eng",
              "games_count": 1535,
              "image_background": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg"
          },
          {
              "id": 91686,
              "name": "Family Sharing",
              "slug": "family-sharing",
              "language": "eng",
              "games_count": 18333,
              "image_background": "https://media.rawg.io/media/games/531/5310bfdd3240f2c037eebaa75c04c44e.jpg"
          },
          {
              "id": 49959,
              "name": "2D Platformer",
              "slug": "2d-platformer-3",
              "language": "eng",
              "games_count": 8142,
              "image_background": "https://media.rawg.io/media/games/7ad/7adc6352280fe0e6626902e444e22195.jpg"
          },
          {
              "id": 49995,
              "name": "2D-платформер",
              "slug": "2d-platformer-4",
              "language": "eng",
              "games_count": 8097,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 56825,
              "name": "2D-файтинг",
              "slug": "2d-faiting",
              "language": "eng",
              "games_count": 1230,
              "image_background": "https://media.rawg.io/media/games/6f3/6f34131554c961f0ff37ed476e939252.jpg"
          }
      ],
      "esrb_rating": {
          "id": 3,
          "name": "Teen",
          "slug": "teen"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 30985,
              "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
          },
          {
              "id": 30986,
              "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
          },
          {
              "id": 30987,
              "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
          },
          {
              "id": 30988,
              "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
          },
          {
              "id": 30989,
              "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
          },
          {
              "id": 30991,
              "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
          }
      ]
  },
  {
      "id": 11859,
      "slug": "team-fortress-2",
      "name": "Team Fortress 2",
      "released": "2007-10-10",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      "rating": 3.68,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 1314,
              "percent": 44.85
          },
          {
              "id": 3,
              "title": "meh",
              "count": 703,
              "percent": 23.99
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 623,
              "percent": 21.26
          },
          {
              "id": 1,
              "title": "skip",
              "count": 290,
              "percent": 9.9
          }
      ],
      "ratings_count": 2902,
      "reviews_text_count": 19,
      "added": 13942,
      "added_by_status": {
          "yet": 194,
          "owned": 10865,
          "beaten": 816,
          "toplay": 51,
          "dropped": 1837,
          "playing": 179
      },
      "metacritic": 92,
      "playtime": 8,
      "suggestions_count": 542,
      "updated": "2025-04-30T23:13:17",
      "user_game": null,
      "reviews_count": 2930,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 548064,
                  "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
              },
              "released_at": "2007-10-10",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>",
                  "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
              },
              "requirements_ru": {
                  "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
                  "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "macOS",
                  "slug": "macos",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 106313,
                  "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
              },
              "released_at": "2007-10-10",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
              },
              "requirements_ru": null
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux",
                  "image": null,
                  "year_end": null,
                  "year_start": null,
                  "games_count": 78913,
                  "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              },
              "released_at": "2007-10-10",
              "requirements_en": {
                  "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>"
              },
              "requirements_ru": null
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          },
          {
              "platform": {
                  "id": 5,
                  "name": "Apple Macintosh",
                  "slug": "mac"
              }
          },
          {
              "platform": {
                  "id": 6,
                  "name": "Linux",
                  "slug": "linux"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 186941,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59561,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          }
      ],
      "stores": [
          {
              "id": 13018,
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam",
                  "domain": "store.steampowered.com",
                  "games_count": 111048,
                  "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
              }
          }
      ],
      "clip": null,
      "tags": [
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 45479,
              "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 40643,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 13201,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5912,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 34886,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 13062,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 14260,
              "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6771,
              "image_background": "https://media.rawg.io/media/games/18c/18ca24ed4b700668c36b11ebc35f3d23.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 27158,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13806,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 79,
              "name": "Free to Play",
              "slug": "free-to-play",
              "language": "eng",
              "games_count": 8573,
              "image_background": "https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5955,
              "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
          },
          {
              "id": 11669,
              "name": "stats",
              "slug": "stats",
              "language": "eng",
              "games_count": 5500,
              "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1659,
              "image_background": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg"
          },
          {
              "id": 40832,
              "name": "Cross-Platform Multiplayer",
              "slug": "cross-platform-multiplayer",
              "language": "eng",
              "games_count": 2927,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 2063,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 1045,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 40837,
              "name": "In-App Purchases",
              "slug": "in-app-purchases",
              "language": "eng",
              "games_count": 3094,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 40833,
              "name": "Captions available",
              "slug": "captions-available",
              "language": "eng",
              "games_count": 1443,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 125,
              "name": "Crafting",
              "slug": "crafting",
              "language": "eng",
              "games_count": 4949,
              "image_background": "https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1880,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 170,
              "name": "Competitive",
              "slug": "competitive",
              "language": "eng",
              "games_count": 1238,
              "image_background": "https://media.rawg.io/media/screenshots/616/616437f375a1080756c917b1437404f3.jpg"
          },
          {
              "id": 40856,
              "name": "Valve Anti-Cheat enabled",
              "slug": "valve-anti-cheat-enabled",
              "language": "eng",
              "games_count": 105,
              "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
          },
          {
              "id": 197,
              "name": "Robots",
              "slug": "robots",
              "language": "eng",
              "games_count": 8595,
              "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
          },
          {
              "id": 40834,
              "name": "Commentary available",
              "slug": "commentary-available",
              "language": "eng",
              "games_count": 285,
              "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
          },
          {
              "id": 164,
              "name": "Cartoony",
              "slug": "cartoony",
              "language": "eng",
              "games_count": 7433,
              "image_background": "https://media.rawg.io/media/screenshots/066/066eb1b7a3f332b8089645fbf8c3ebdc.jpg"
          },
          {
              "id": 179,
              "name": "Cartoon",
              "slug": "cartoon",
              "language": "eng",
              "games_count": 6992,
              "image_background": "https://media.rawg.io/media/screenshots/942/942c57fe3a5a0edc24ac61869214a2e7.jpg"
          },
          {
              "id": 265,
              "name": "Class-Based",
              "slug": "class-based",
              "language": "eng",
              "games_count": 801,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 245,
              "name": "Trading",
              "slug": "trading",
              "language": "eng",
              "games_count": 1342,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
      },
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 97905,
              "image": "https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg"
          },
          {
              "id": 97906,
              "image": "https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg"
          },
          {
              "id": 97907,
              "image": "https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg"
          },
          {
              "id": 97908,
              "image": "https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg"
          },
          {
              "id": 97909,
              "image": "https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg"
          },
          {
              "id": 97910,
              "image": "https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg"
          }
      ]
  }
]


@Component({
  selector: 'app-games-carusel',
  imports: [CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    RouterLink
],
  templateUrl: './games-carusel.component.html',
  styleUrl: './games-carusel.component.scss'
})
export class GamesCaruselComponent implements OnInit {

// games = signal<Game[]>([]);
games = input<Game[]>([]);




ngOnInit(): void {
  // this.games.set(dummyGames);
}


}
