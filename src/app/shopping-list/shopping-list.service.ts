import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
    ingradientsAdded = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients("Apple", 50),
        new Ingredients("Tomatos", 30),

    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    onIngradientsAdded(ingradient: Ingredients) {
        this.ingredients.push(ingradient);
        this.ingradientsAdded.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ingradient: Ingredients[]) {
        this.ingredients.push(...ingradient);
        this.ingradientsAdded.emit(this.ingredients.slice());

    }
}