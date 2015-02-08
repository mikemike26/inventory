angular.module('inventoryApp').config([ '$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/dashboard/view');
			$stateProvider
            .state("dashboard", {
                url : '/dashboard',
                templateUrl : 'templates/layout/dashboard.html',
                abstract: true,
                controller: function($scope, $state) {
                    $scope.$state = $state;
                }
            })
            //sites =======================================================================
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
            //vendor ======================================================================
            .state("dashboard.vendor", {
                url : '/vendor',
                abstract: true,
                templateUrl : 'templates/pages/vendor-index.html'
            })
            .state("dashboard.vendor.view", {
                url : '/view',
                templateUrl : 'templates/pages/vendor-view.html'
            })
            .state("dashboard.vendor.item", {
                url : '/:itemId/item',
                templateUrl : 'templates/pages/vendor-item.html'
            })
            .state("dashboard.vendor.new", {
                url : '/add',
                templateUrl : 'templates/pages/vendor-new.html'
            })
            .state("dashboard.vendor.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/vendor-edit.html'
            })
            //circuits ======================================================================
            .state("dashboard.circuits", {
                url : '/circuits',
                abstract: true,
                templateUrl : 'templates/pages/circuits-index.html'
            })
            .state("dashboard.circuits.view", {
                url : '/view',
                templateUrl : 'templates/pages/circuits-view.html'
            })
            .state("dashboard.circuits.item", {
                url : '/:itemId/item',
                templateUrl : 'templates/pages/circuits-item.html'
            })
            .state("dashboard.circuits.new", {
                url : '/add',
                templateUrl : 'templates/pages/circuits-new.html'
            })
            .state("dashboard.circuits.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/circuits-edit.html'
            })

} ]);


