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

  constructor(private dogService: DogService){}
  
  getDogImage(){
    this.dogService.getDog().subscribe(response =>{
      this.dogImageUrl = response.message;
      this.dogImageSuccess = response.status === 'success';
    } )
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
