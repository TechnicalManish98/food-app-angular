import { Ingredients } from "../shared/ingredients.model";

export class Recipe{
    public recipeName:string
    public description:string
    public imagePath:string
    public ingredients:Ingredients[];

    constructor(name:string,desc:string,imagePath:string,ingredients:Ingredients[]){
        this.recipeName=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients;

    }

}