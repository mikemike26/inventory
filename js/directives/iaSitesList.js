angular.module('inventoryApp').directive('iaSitesList', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesList.html',
       link: function(scope, element, attrs) {
           SitesData.getAll().then(function(data) {
               scope.sites = data;
           });
           console.log(scope.sites);
           scope.goToItem = function(site) {
               $state.transitionTo("dashboard.sites.item", { itemId: site.Id });
           };
       }
   }
});