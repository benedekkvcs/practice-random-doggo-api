import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favourites: string[] = [];
  currentImage: string | null = null;

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

  setCurrentImage(url: string) { 
    this.currentImage = url; 
  }

  isFavourite(url: string): boolean { 
    return this.favourites.includes(url); 
  }

  addData(item: string): void {
    this.favourites.push(item);
    localStorage.setItem("dogs", JSON.stringify(this.favourites));
  }

  getData(): string[]{
    return [...this.favourites];
  }

  removeItem(url: string): void {
    if (this.favourites.includes(url)) { 
      this.favourites = this.favourites.filter(f => f !== url); } 
    else { 
        this.favourites.push(url); 
    } 
    localStorage.setItem("dogs", JSON.stringify(this.favourites));
  }
}
