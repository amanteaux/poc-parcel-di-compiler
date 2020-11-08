import { DIContainer } from '@wessberg/di';
import { ServiceA } from './ServiceA';
import { ServiceB } from './ServiceB';

const container = new DIContainer();

// works
container.registerSingleton(undefined, {identifier:'ServiceA', implementation:ServiceA});
container.registerSingleton(undefined, {identifier:'ServiceB', implementation:ServiceB});
const serviceB = container.get<ServiceB>({identifier: 'ServiceB'});

// does not work
/*container.registerSingleton<ServiceA>(); // Uncaught ReferenceError: DIContainer could not get service: No arguments were given!
container.registerSingleton<ServiceB>(); // Uncaught ReferenceError: DIContainer could not get service: No arguments were given!
const serviceB = container.get<ServiceB>(); // Uncaught ReferenceError: DIContainer could not get service: No options was given!*/



console.log(serviceB.sayYourName());
