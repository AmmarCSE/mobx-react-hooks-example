import FoodList from "../FoodList"

describe("FoodList", () => {
  it("creates new foods", () => {
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
      }
    }
    const store = new FoodList()
    for (let foodKey in food) {
      const foodItem = food[foodKey]
      store.addFood({ id: foodKey, ...foodItem })
    }
    expect(store.foods.length).toBe(2)
    expect(store.foods[0]).toMatchObject(food["e5d9d9f5"])
    expect(store.foods[1]).toMatchObject(food["a9ba692b"])
  })
})
