import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private data: string[] = [];

  constructor(){
    this.data = this.loadItem("dogs");
  }

  loadItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return null;
    }
  }

  addData(item: string): void {
    this.data.push(item);
    localStorage.setItem("dogs", JSON.stringify(this.data));
  }

  getData(): string[]{
    return [...this.data];
  }

  removeItem(item: string): void {
    this.data = this.data.filter(i => i !== item);
    localStorage.setItem("dogs", JSON.stringify(this.data));
  }
}
