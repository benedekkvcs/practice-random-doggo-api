import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favourites: string[] = [];
  private currentUrl: string | null = null;
  storageService = inject(StorageService);

  constructor(){
    this.favourites = this.storageService.loadItem("dogs");
    let example = this.storageService.loadItem("dogs");
    example.url = '';
    example.HasDragon = true;
  }

  setCurrentUrl(url: string) {
    this.currentUrl = url; 
  }

  isFavourite(url: string): boolean { 
    return this.favourites.includes(url); 
  }

  addUrl(item: string): void {
    this.favourites.push(item);
    this.storageService.setItems("dogs", this.favourites);
  }

  getUrls(): string[]{
    return [...this.favourites];
  }

  getCurrentUrl(): string {
    return this.currentUrl ? this.currentUrl : false;
  }

  removeUrl(url: string): void {
    if (this.favourites.includes(url)) { 
      this.favourites = this.favourites.filter(f => f !== url); } 
    else { 
        this.favourites.push(url); 
    } 
    this.storageService.setItems("dogs", this.favourites)
  }
}
