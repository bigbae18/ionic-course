import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../services/recetas.service';
import { IRecipe } from '../data/recetas';
import { LoadingController } from '@ionic/angular';

interface IIngredientChip {
  name: string,
  selected: boolean
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ingredients: Array<IIngredientChip> = [];
  recipes: Array<IRecipe> = [];

  constructor(
    private recipesService: RecetasService,
    private loadingController: LoadingController
  ) {}

  ngOnInit(): void {
    this.ingredients = this.recipesService.getIngredients();
  }

  selectIngredient(ingredient: IIngredientChip) {
    ingredient.selected = !ingredient.selected;
    this.getFilteredRecipes();
  }

  async getFilteredRecipes() {
    const selectedIngredients = this.ingredients.filter(ing => ing.selected).map(ing => ing.name);

    const loading = await this.loadingController.create({
      message: "Loading recipes..."
    });

    await loading.present();

    const subscription = this.recipesService.getRecipesByIngredients(selectedIngredients)
      .subscribe(filteredRecipes => {
        this.recipes = filteredRecipes;
        loading.dismiss();
        subscription.unsubscribe();
      })
  }

}
