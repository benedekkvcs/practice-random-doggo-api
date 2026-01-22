import { Component, inject } from '@angular/core';
import { FavouriteService } from '../../services/favourite-service';
import { Button } from '../button/button';

@Component({
  selector: 'app-favourites',
  imports: [Button],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class Favourites {
    dataStore = inject(FavouriteService);
    dogImages = this.dataStore.getData();
}
