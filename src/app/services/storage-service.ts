import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  loadItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return [];
    }
  }

  setItems(key: string, items: string[]){
    localStorage.setItem(key, JSON.stringify(items));
  }
}
