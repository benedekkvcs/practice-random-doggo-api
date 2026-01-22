import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private data: string[] = []

  addData(item: string): void {
    this.data.push(item);
  }

  getData(): string[]{
    return [...this.data];
  }

  removeItem(item: string): void {
    this.data = this.data.filter(i => i !== item);
  }
}
