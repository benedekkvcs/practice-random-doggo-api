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
  favouriteService = inject(FavouriteService)
  dogService = inject(DogService)

  ngOnInit(){
    if (this.favouriteService.currentUrl) { 
      this.dogImageUrl = this.favouriteService.currentUrl; 
      this.dogImageSuccess = true; 
    }
  }
  
  getDogImage(){
    this.dogService.getDog().subscribe(response =>{
      console.log(response);
      this.dogImageUrl = response.message;
      this.dogImageSuccess = response.status === 'success';
      this.favouriteService.setCurrentImage(this.dogImageUrl);
    } )
  }

  toggleFavourite(){
    if(this.dogImageUrl){
      this.favouriteService.removeItem(this.dogImageUrl);
    }
  }
  
  get isFavourite(){
    return this.dogImageUrl ? this.favouriteService.isFavourite(this.dogImageUrl) : false;
  }

  searchDog(){
    this.getDogImage();
  }

  addImage(){
    this.favouriteService.addData(this.dogImageUrl)
  }

  handleRandomButtonClick(event: Event): void {
    this.searchDog();
  }

  handleFavouriteButtonClick(event: Event): void {
    this.toggleFavourite();
  }
} 
