import * as React from "react"
import { Observer, useObservable } from "mobx-react-lite"
import styled, { css } from "styled-components"

export default function FoodItem(props) {
  const food = useObservable(props.food)
  const Row = styled.li`
    padding: 5px;
    margin-bottom: 1px;
    border: solid 1px gray;
    background: lightgray;
    transition: background-color 1000ms linear, margin 700ms;
    ${props =>
      props.isDelicious &&
      css`
        margin-left: 30px;
      `}
    ${(props: object) =>
      props.isHealthy &&
      css`
        background: darkseagreen;
      `}
  `
  return (
    <Observer>
      {() => (
        <Row isDelicious={food.isDelicious} isHealthy={food.isHealthy}>
          {food.label}
          <label>
            <input
              type="checkbox"
              checked={food.isDelicious}
              onChange={food.toggleIsDelicious}
            />
            Is Delicious
          </label>
          <label>
            <input
              type="checkbox"
              checked={food.isHealthy}
              onChange={food.toggleIsHealthy}
            />
            Is Healthy
          </label>
        </Row>
      )}
    </Observer>
  )
}
