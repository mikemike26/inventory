angular.module('inventoryApp').directive('iaSitesList', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesList.html',
       link: function(scope, element, attrs) {
           scope.sites = SitesData.getAll();
           scope.goToItem = function(site) {
               $state.transitionTo("dashboard.sites.item", { itemId: site.id });
           };
       }
   }
});