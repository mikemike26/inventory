angular.module('inventoryApp').config([ '$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/dashboard/inventory/sites/view');
			$stateProvider
            .state("dashboard", {
                url : '/dashboard',
                templateUrl : 'templates/layout/dashboard.html',
                abstract: true,
                controller: function($scope, $state) {
                    $scope.$state = $state;
                }
            })
            .state("dashboard.inventory", {
                url : '/inventory',
                templateUrl : 'templates/layout/inventory.html',
                abstract: true,
                controller: function($scope, $state) {
                    $scope.$state = $state;
                }
            })
            //sites =======================================================================
			.state("dashboard.inventory.sites", {
				url : '/sites',
                abstract: true,
                templateUrl : 'templates/pages/sites/wrapper.html'
			})
            .state("dashboard.inventory.sites.index", {
                url : '',
                templateUrl : 'templates/pages/sites/index.html'
            })
            .state("dashboard.inventory.sites.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/sites/edit.html'
            })
            .state("dashboard.inventory.sites.new", {
                url : '/new',
                templateUrl : 'templates/pages/sites/new.html'
            })
            // least specific routes need to be last (non-specific urls)
            .state("dashboard.inventory.sites.show", {
                url : '/:itemId',
                templateUrl : 'templates/pages/sites/show.html'
            })
            //vendor ======================================================================
            .state("dashboard.inventory.vendor", {
                url : '/vendor',
                abstract: true,
                templateUrl : 'templates/pages/vendors/wrapper.html'
            })
            .state("dashboard.inventory.vendor.index", {
                url : '',
                templateUrl : 'templates/pages/vendors/index.html'
            })
            .state("dashboard.inventory.vendor.new", {
                url : '/add',
                templateUrl : 'templates/pages/vendors/new.html'
            })
            .state("dashboard.inventory.vendor.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/vendors/edit.html'
            })
            .state("dashboard.inventory.vendor.show", {
                url : '/:itemId',
                templateUrl : 'templates/pages/vendors/show.html'
            })
            //circuits ======================================================================
            .state("dashboard.inventory.circuits", {
                url : '/circuits',
                abstract: true,
                templateUrl : 'templates/pages/circuits/wrapper.html'
            })
            .state("dashboard.inventory.circuits.index", {
                url : '',
                templateUrl : 'templates/pages/circuits/index.html'
            })
            .state("dashboard.inventory.circuits.new", {
                url : '/add',
                templateUrl : 'templates/pages/circuits/new.html'
            })
            .state("dashboard.inventory.circuits.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/circuits/edit.html'
            })
            .state("dashboard.inventory.circuits.show", {
                url : '/:itemId',
                templateUrl : 'templates/pages/circuits/show.html'
            })
} ]);


