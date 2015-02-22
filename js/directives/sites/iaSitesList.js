angular.module('inventoryApp').directive('iaSitesList', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/sites/iaSitesList.html',
       link: function(scope, element, attrs) {
           scope.hide = true;
           SitesData.getAll().then(function(data) {
               scope.sites = data;
               scope.hide = false;
           });
           console.log(scope.sites);
           scope.goToItem = function(site) {
               $state.transitionTo("dashboard.inventory.sites.show", { itemId: site.Id });
           };
       }
   }
});