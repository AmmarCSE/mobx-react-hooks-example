import { observable, action } from "mobx"

export default class Food {
  id
  @observable label: string
  @observable isDelicious: boolean = false
  @observable isHealthy: boolean = false
  constructor({ id, label, isDelicious, isHealthy }) {
    this.id = id
    this.label = label
    this.isDelicious = isDelicious
    this.isHealthy = isHealthy
  }

  @action
  toggleIsDelicious = () => {
    this.isDelicious = !this.isDelicious
  }
  @action
  toggleIsHealthy = () => {
    this.isHealthy = !this.isHealthy
  }
}
