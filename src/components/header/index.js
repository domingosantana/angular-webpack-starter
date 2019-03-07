import headerComponent from './header.component';

const headerModule = angular.module('app.header', []);

// Cargar componentes, servicios, directivas específicos para este módulo
headerModule.component('appHeader', headerComponent);

// Exportar este módulo
export default headerModule;
