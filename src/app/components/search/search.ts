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
  favouriteStore = inject(FavouriteService)

  constructor(private dogService: DogService){}

  ngOnInit(){
    if (this.favouriteStore.currentImage) { 
      this.dogImageUrl = this.favouriteStore.currentImage; 
      this.dogImageSuccess = true; 
    }
  }
  
  getDogImage(){
    this.dogService.getDog().subscribe(response =>{
      console.log(response);
      this.dogImageUrl = response.message;
      this.dogImageSuccess = response.status === 'success';
      this.favouriteStore.setCurrentImage(this.dogImageUrl);
    } )
  }

  toggleFavourite(){
    if(this.dogImageUrl){
      this.favouriteStore.removeItem(this.dogImageUrl);
    }
  }
  
  get isFavourite(){
    return this.dogImageUrl ? this.favouriteStore.isFavourite(this.dogImageUrl) : false;
  }

  searchDog(){
    this.getDogImage();
  }

  addImage(){
    this.favouriteStore.addData(this.dogImageUrl)
  }

  handleRandomButtonClick(event: Event): void {
    this.searchDog();
  }

  handleFavouriteButtonClick(event: Event): void {
    this.toggleFavourite();
  }
} 
