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
  dataStore = inject(FavouriteService)

  constructor(private dogService: DogService){
    // this.dogImageUrl = this.loadItem("dog");
  }
  
  getDogImage(){
    this.dogService.getDog().subscribe(response =>{
      this.dogImageUrl = response.message;
      this.dogImageSuccess = response.status === 'success';
      sessionStorage.setItem("dog", JSON.stringify(this.dogImageUrl))
    } )
  }

  // loadItem(key: string): any {
  //   try{
  //     const item = sessionStorage.getItem(key);
  //     return item ? JSON.parse(item) : null
  //   }catch (e) {
  //     console.error('Error reading from localStorage', e);
  //     return null;
  //   }
  // }

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
