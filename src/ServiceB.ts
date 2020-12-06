import { ServiceA } from './ServiceA';

export class ServiceB {

  constructor(private readonly serviceA: ServiceA) {
    throw new Error('DI will swallow this error');
  }

  sayYourName() {
    return `Service A with the help of ${this.serviceA.sayYourName()}`
  }

}
