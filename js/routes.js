salesTool.config([ '$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/main');

			$stateProvider
			.state("login", {
				url : '/login',
				templateUrl : 'templates/pages/login.html'
			})
            .state("dashboard", {
                url : '/dashboard',
                templateUrl : 'templates/layout/store-dashboard.html',
                abstract: true,
                controller: function($scope, $state) {
                    $scope.$state = $state;
                }
            })
			.state("dashboard.main", {
				url : '/main',
                views : {
                    "header" : {templateUrl: "templates/layout/dashboard-header.html"},
                    "content" : {templateUrl: "templates/pages/main.html"},
                    "nav" : {templateUrl: "templates/layout/dashboard-nav.html"}
                 }
			})

} ]);


