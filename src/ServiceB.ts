import { ServiceA } from './ServiceA';

export class ServiceB {

  constructor(private readonly serviceA: ServiceA) {
  }

  sayYourName() {
    return `Service A with the help of ${this.serviceA.sayYourName()}`
  }

}
