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
                templateUrl : 'templates/pages/sites-index.html'
			})
            .state("dashboard.inventory.sites.view", {
                url : '/view',
                templateUrl : 'templates/pages/sites-view.html'
            })
            .state("dashboard.inventory.sites.item", {
                url : '/:itemId/item',
                templateUrl : 'templates/pages/sites-item.html'
            })
            .state("dashboard.inventory.sites.new", {
                url : '/add',
                templateUrl : 'templates/pages/sites-new.html'
            })
            .state("dashboard.inventory.sites.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/sites-edit.html'
            })
            //vendor ======================================================================
            .state("dashboard.inventory.vendor", {
                url : '/vendor',
                abstract: true,
                templateUrl : 'templates/pages/vendor-index.html'
            })
            .state("dashboard.inventory.vendor.view", {
                url : '/view',
                templateUrl : 'templates/pages/vendor-view.html'
            })
            .state("dashboard.inventory.vendor.item", {
                url : '/:itemId/item',
                templateUrl : 'templates/pages/vendor-item.html'
            })
            .state("dashboard.inventory.vendor.new", {
                url : '/add',
                templateUrl : 'templates/pages/vendor-new.html'
            })
            .state("dashboard.inventory.vendor.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/vendor-edit.html'
            })
            //circuits ======================================================================
            .state("dashboard.inventory.circuits", {
                url : '/circuits',
                abstract: true,
                templateUrl : 'templates/pages/circuits-index.html'
            })
            .state("dashboard.inventory.circuits.view", {
                url : '/view',
                templateUrl : 'templates/pages/circuits-view.html'
            })
            .state("dashboard.inventory.circuits.item", {
                url : '/:itemId/item',
                templateUrl : 'templates/pages/circuits-item.html'
            })
            .state("dashboard.inventory.circuits.new", {
                url : '/add',
                templateUrl : 'templates/pages/circuits-new.html'
            })
            .state("dashboard.inventory.circuits.edit", {
                url : '/:itemId/edit',
                templateUrl : 'templates/pages/circuits-edit.html'
            })

} ]);


