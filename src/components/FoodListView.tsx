import * as React from "react"
import { Observer, useObservable } from "mobx-react-lite"
import styled, { css } from "styled-components"

import FoodItemView from "./FoodItemView"

const List = styled.ul`
  list-style: none;
  font-family: monospace;
  width: 50%;
`

export default function FoodListView(props) {
  const foodList = useObservable(props.foodList)
  return (
    <div>
      <List>
        <Observer>
          {() =>
            foodList.foods.map(food => (
              <FoodItemView food={food} key={food.id} />
            ))
          }
        </Observer>
      </List>
    </div>
  )
}
