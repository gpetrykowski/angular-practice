import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://placeimg.com/640/480/people'),
    new Recipe('A Test Recipe', 'This is a test', 'https://www.cipd.co.uk/Images/cipd-scotland_tcm18-8662_w1200_n.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
