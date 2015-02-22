angular.module('inventoryApp').directive('iaSitesDetail', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/sites/iaSitesDetail.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           scope.delete = false;
           SitesData.find(siteId).then(function(data) {
               scope.site = data;
               console.log(data);
           });
           scope.edit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               $state.transitionTo("dashboard.inventory.sites.edit", {itemId: siteId});
           };
           scope.deleteSitePrompt = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.delete = !scope.delete;
           };
           scope.deleteSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               SitesData.destroy(siteId).then(function() {
                   $state.transitionTo("dashboard.inventory.sites.index", {});
               });
           };
       }
   }
});
