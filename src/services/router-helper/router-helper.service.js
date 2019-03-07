import appRoutes from './app-routes';

export default function routerHelper($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	$locationProvider.html5Mode(true); // Modo html5 para eliminar !# de la url
	$urlRouterProvider.otherwise('/'); // Ruta por defecto

	appRoutes.forEach((route) => {
		$stateProvider.state(route);
	});
}
