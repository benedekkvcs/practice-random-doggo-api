import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favouriteUrls: Set<string> = new Set<string>();
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
    return this.favouriteUrls.has(url); 
  }

  getUrls(): string[]{
    return [...this.favouriteUrls];
  }

  getCurrentUrl(): string {
    return this.currentUrl ? this.currentUrl : "";
  }

  toggleUrlInFavouriteUrls(url: string): void {
    if (this.favouriteUrls.has(url)) { 
      this.favouriteUrls.delete(url);
    }
    else { 
        this.favouriteUrls.add(url); 
    } 
    
    this.storageService.setItems(this.favouriteUrlsLocalStorage, this.favouriteUrls)
  }
}
