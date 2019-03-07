import routerHelperService from './router-helper/router-helper.service';
// import exampleService from './example/example.service';

const coreModule = angular.module('app.core', [
  'ui.router'
]);

/**
Servicios de inyección, configuración, filtros y código reutilizable
que se puede compartir a través de todos los módulos.
*/
coreModule.config(routerHelperService);

// coreModule.service('exampleService', exampleService);

export default coreModule;
