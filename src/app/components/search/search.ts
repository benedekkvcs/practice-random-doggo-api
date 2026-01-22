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

  constructor(private dogService: DogService){}

  searchDog(){
    this.dogService.getDog().subscribe(response =>{
      this.dogImageUrl = response.message;
    } )
  }

  handleButtonClick(event: Event): void {
    this.searchDog();
  }
} 
