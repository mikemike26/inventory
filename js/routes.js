ia.config([ '$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/dashboard/main');
			$stateProvider
            .state("dashboard", {
                url : '/dashboard',
                templateUrl : 'templates/layout/dashboard.html',
                abstract: true
            })
			.state("dashboard.main", {
				url : '/main',
                templateUrl : 'templates/pages/main.html'
			})

} ]);


