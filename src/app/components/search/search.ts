import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-search',
  imports: [Button],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {
  handleButtonClick(event: Event): void {
    console.log("click works!")
  }
} 
