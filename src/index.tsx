import * as React from "react"
import { render } from "react-dom"

import FoodList from './models/FoodList'
import FoodListView from "./components/FoodListView"

const store = new FoodList()
const food = {
  e5d9d9f5: {
    label: "ice cream",
    isDelicious: true,
    isHealthy: false
  },
  a9ba692b: {
    label: "pizza",
    isDelicious: true,
    isHealthy: false
  },
  ze128a47: {
    label: "spinach",
    isDelicious: false,
    isHealthy: true
  }
}
for (let foodKey in food) {
  const foodItem = food[foodKey]
  store.addFood({ id: foodKey, ...foodItem }))
}

render(<FoodListView foodList={store} />, document.getElementById("root") as HTMLElement)
