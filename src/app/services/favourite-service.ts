import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favourites: string[] = [];
  private currentUrl: string | null = null;
  private favouritesLocalStorage: string = "dogs"
  private storageService = inject(StorageService);

  constructor(){
    this.favourites = this.storageService.loadItem(this.favouritesLocalStorage);
  }

  setCurrentUrl(url: string) {
    this.currentUrl = url; 
  }

  isFavourite(url: string): boolean { 
    return this.favourites.includes(url); 
  }

  addUrl(item: string): void {
    this.favourites.push(item);
    this.storageService.setItems(this.favouritesLocalStorage, this.favourites);
  }

  getUrls(): string[]{
    return [...this.favourites];
  }

  getCurrentUrl(): string {
    return this.currentUrl ? this.currentUrl : "";
  }

  toggleUrlInFavourites(url: string): void {
    if (this.favourites.includes(url)) { 
      this.favourites = this.favourites.filter(f => f !== url); } 
    else { 
        this.favourites.push(url); 
    } 
    this.storageService.setItems(this.favouritesLocalStorage, this.favourites)
  }
}
