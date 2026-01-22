import { Component } from '@angular/core';
import { Button } from '../button/button';
import { DogService } from '../../services/dog';

@Component({
  selector: 'app-search',
  imports: [Button],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {
  dogImageUrl?: string;
  dogImageSuccess?: boolean = false;

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

  handleButtonClick(event: Event): void {
    this.searchDog();
  }
} 
