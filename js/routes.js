angular.module('inventoryApp').config([ '$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/dashboard/sites');
			$stateProvider
            .state("dashboard", {
                url : '/dashboard',
                templateUrl : 'templates/layout/dashboard.html',
                abstract: true,
                controller: function($scope, $state) {
                    $scope.$state = $state;
                }
            })
			.state("dashboard.sites", {
				url : '/sites',
                abstract: true,
                templateUrl : 'templates/pages/sites-index.html'
			})
            .state("dashboard.sites.view", {
                url : '/view',
                templateUrl : 'templates/pages/sites-view.html'
            })
            .state("dashboard.sites.item", {
                url : '/:itemId/item',
                templateUrl : 'templates/pages/sites-item.html'
            })
            .state("dashboard.sites.new", {
                url : '/add',
                templateUrl : 'templates/pages/sites-new.html'
            })
            .state("dashboard.sites.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/sites-edit.html'
            })

} ]);


