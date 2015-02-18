angular.module('inventoryApp').directive('iaSitesNew', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesNew.html',
       link: function(scope, element, attrs) {
           scope.site = {};

           scope.addSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.site);
               SitesData.create(scope.site).then(function() {
                   $state.go('dashboard.inventory.sites.view');
               });
           }
       }
   }
});
