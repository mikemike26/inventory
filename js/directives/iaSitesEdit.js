angular.module('inventoryApp').directive('iaSitesEdit', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesEdit.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           scope.site = SitesData.find(siteId);
           scope.updateSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               SitesData.update(scope.site);
               $state.transitionTo("dashboard.sites.view", {});
           };
       }
   }
});

