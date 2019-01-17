import { observable, action } from "mobx"
import Food from "./Food"

export default class FoodList {
  @observable foods = [] as Food[]

  @action
  addFood(food: Food) {
    this.foods.push(new Food({ ...food }))
  }
}
