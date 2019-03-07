import homeComponent from './home.component';

const homeModule = angular.module('app.home', []);

// Cargar componentes, servicios, directivas específicos para este módulo
homeModule.component('home', homeComponent);

// Exportar este módulo
export default homeModule;
