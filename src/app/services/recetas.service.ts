import { Injectable } from '@angular/core';
import { IRecipe, RECIPES } from '../data/recetas';
import { delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() { }

  getRecipesByIngredients(ingredients: Array<string>) {
    return of(RECIPES)
      .pipe(
        delay(3000),
        map(recipes => {
          return recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredients.includes(ingredient)))
        })
      )
  }

  getIngredients() {
    const ingredients = RECIPES.reduce((ingredients: Array<string>, recipe: IRecipe) => {
      return [...ingredients, ...recipe.ingredients]
    }, []);

    return [...new Set(ingredients)].sort().map(ingredient => {
      return {
        name: ingredient,
        selected: false,
      }
    })
  }
}
