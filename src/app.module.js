// Cargando módulo compartido
import './services/core.module';
// Cargando todos los componentes
import './app.components';

const appModule = angular
.module('angular-webpack-starter', [
  // Módulo compartido
  'app.core',
  // Módulos de terceros
  'ui.router',
  // Módulos específicos de la app
  'app.header',
  'app.home'
]);

export default appModule;
