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
    favouriteService = inject(FavouriteService);
    dogUrls= this.favouriteService.getUrls();

    onDeleteItem(dogUrl: string) {
        this.favouriteService.toggleUrlInFavouriteUrls(dogUrl);
        this.dogUrls = this.favouriteService.getUrls();
    }

    onMovingUp(dogUrl: string){
        const arr = Array.from(this.dogUrls);
        var idx : number = arr.indexOf(dogUrl);
    
        if(idx != 0){
            var newIndex = idx - 1;
            [arr[newIndex], arr[idx]] = [arr[idx], arr[newIndex]];

            const set = new Set<string>(arr)
            this.favouriteService.setFavouriteUrls(set);
            this.dogUrls= this.favouriteService.getUrls();
        }

        
    }

    onMovingDown(dogUrl: string){
        const arr = Array.from(this.dogUrls);
        var idx : number = arr.indexOf(dogUrl);
    
        if(idx != arr.length-1){
            var newIndex = idx + 1;
            [arr[newIndex], arr[idx]] = [arr[idx], arr[newIndex]];

            const set = new Set<string>(arr)
            this.favouriteService.setFavouriteUrls(set);
            this.dogUrls= this.favouriteService.getUrls();
        }


    }
}
