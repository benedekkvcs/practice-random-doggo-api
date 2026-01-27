import { Component, inject, OnInit } from '@angular/core';
import { Button } from '../button/button';
import { DogService } from '../../services/dog-service';
import { FavouriteService } from '../../services/favourite-service';

@Component({
  selector: 'app-search',
  imports: [Button],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search implements OnInit {
  private dogImageUrl: string = "";
  private dogImageSuccess: boolean = false;
  private favouriteService = inject(FavouriteService);
  private dogService = inject(DogService);

  ngOnInit(){
    if (this.favouriteService.getCurrentUrl()) { 
      this.dogImageUrl = this.favouriteService.getCurrentUrl(); 
      this.dogImageSuccess = true;
    }
  }
  
  getDogImage(){
    this.dogService.getDog().subscribe(response =>{
      console.log(response);
      this.dogImageUrl = response.message;
      this.dogImageSuccess = response.status === 'success';
      this.favouriteService.setCurrentUrl(this.dogImageUrl);
    } )
  }

  toggleFavourite(){
    if(this.dogImageUrl){
      this.favouriteService.toggleUrlInFavourites(this.dogImageUrl);
    }
  }

  // addImage(){
  //   this.favouriteService.addUrl(this.dogImageUrl)
  // }

  handleRandomButtonClick(): void {
    this.getDogImage();
  }

  handleFavouriteButtonClick(): void {
    this.toggleFavourite();
  }
} 
