import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  loadItem(key: string): Set<string> {
    try {
      const item = localStorage.getItem(key);
      return item ? new Set(JSON.parse(item)) : new Set<string>();
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return new Set<string>();
    }
  }

  setItems(key: string, items: Set<string>){
    localStorage.setItem(key, JSON.stringify([...items]));
  }
}
