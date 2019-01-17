import Food from "../Food"

describe("Food", () => {
  it("contains information regarding name, deliciousness, and healthiness", () => {
    const food = {
      id: "e5d9d9f5",
      label: "ice cream",
      isDelicious: true,
      isHealthy: false
    }
    const foodToTest = new Food({ ...food })

    expect(foodToTest).toMatchObject(food)
  })
  it("can toggle deliciousness and healthiness", () => {
    const food = {
      id: "e5d9d9f5",
      label: "ice cream",
      isDelicious: true,
      isHealthy: false
    }
    const foodToTest = new Food({ ...food })

    foodToTest.toggleIsDelicious()
    expect(foodToTest.isDelicious).toEqual(false)

    foodToTest.toggleIsHealthy()
    expect(foodToTest.isHealthy).toEqual(true)
  })
})
