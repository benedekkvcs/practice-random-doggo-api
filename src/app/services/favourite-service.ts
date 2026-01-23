import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favourites: string[] = [];
  currentUrl: string | null = null;

  constructor(){
    this.favourites = this.loadItem("dogs");
  }

  loadItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return [];
    }
  }

  setCurrentUrl(url: string) {
    this.currentUrl = url; 
  }

  isFavourite(url: string): boolean { 
    return this.favourites.includes(url); 
  }

  addUrl(item: string): void {
    this.favourites.push(item);
    localStorage.setItem("dogs", JSON.stringify(this.favourites));
  }

  getUrls(): string[]{
    return [...this.favourites];
  }

  removeUrl(url: string): void {
    if (this.favourites.includes(url)) { 
      this.favourites = this.favourites.filter(f => f !== url); } 
    else { 
        this.favourites.push(url); 
    } 
    localStorage.setItem("dogs", JSON.stringify(this.favourites));
  }
}
