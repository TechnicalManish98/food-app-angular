import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    constructor(private shoppingService:ShoppingListService){

    }

    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe("Kolhapuri Misal",
         "Spicy Misal", 
         "https://as1.ftcdn.net/v2/jpg/04/34/68/40/1000_F_434684091_9bSqutLyXPweoZoUoYvm3my9IRBtuPJt.jpg",
         [new Ingredients('Apple',20),new Ingredients('Mango',100)]),

        new Recipe("Puneri Misal", 
        "Medium Spicy Misal", 
        "https://as1.ftcdn.net/v2/jpg/03/39/99/18/1000_F_339991888_hhEPCy33yo2MlQ3aC4m3cViFM0nfEKsl.jpg",
        [new Ingredients('Tomato',20),new Ingredients('Carrot',100)])

    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredients[]){
        this.shoppingService.addIngredientsFromRecipe(ingredients);
    }
}