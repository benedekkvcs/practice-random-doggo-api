import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favouriteUrls: string[] = [];
  private currentUrl: string | null = null;
  
  private favouriteUrlsLocalStorage: string = "dogs"
  private storageService = inject(StorageService);

  constructor(){
    this.favouriteUrls = this.storageService.loadItem(this.favouriteUrlsLocalStorage);
  }

  setCurrentUrl(url: string) {
    this.currentUrl = url; 
  }

  isFavourite(url: string): boolean { 
    return this.favouriteUrls.includes(url); 
  }

  getUrls(): string[]{
    return [...this.favouriteUrls];
  }

  getCurrentUrl(): string {
    return this.currentUrl ? this.currentUrl : "";
  }

  toggleUrlInFavouriteUrls(url: string): void {
    if (this.favouriteUrls.includes(url)) { 
      this.favouriteUrls = this.favouriteUrls.filter(f => f !== url); } 
    else { 
        this.favouriteUrls.push(url); 
    } 
    this.storageService.setItems(this.favouriteUrlsLocalStorage, this.favouriteUrls)
  }
}
