import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { DogService } from '../../services/dog';
import { FavouriteService } from '../../services/favourite-service';

@Component({
  selector: 'app-search',
  imports: [Button],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {
  dogImageUrl: string = "";
  dogImageSuccess?: boolean = false;

  constructor(private dogService: DogService){
    this.dogImageUrl = this.loadItem("dog");
    if(this.dogImageUrl != null && this.dataStore.isDeleted()){
      this.dogImageSuccess = true;
    }
  }
  dataStore = inject(FavouriteService)

  getDogImage(){
    this.dogService.getDog().subscribe(response =>{
      this.dogImageUrl = response.message;
      this.dogImageSuccess = response.status === 'success';
      localStorage.setItem("dog", JSON.stringify(this.dogImageUrl))
    } )
  }

  loadItem(key: string): any {
    try{
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null
    }catch (e) {
      console.error('Error reading from localStorage', e);
      return null;
    }
  }

  searchDog(){
    this.getDogImage();
  }

  addImage(){
    this.dataStore.addData(this.dogImageUrl)
  }

  handleRandomButtonClick(event: Event): void {
    this.searchDog();
  }

  handleFavouriteButtonClick(event: Event): void {
    this.addImage();
    this.dogImageSuccess = false;
  }
} 
