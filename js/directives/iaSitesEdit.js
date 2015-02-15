angular.module('inventoryApp').directive('iaSitesEdit', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesEdit.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           //scope.site = SitesData.find(siteId);
           SitesData.getSiteById(siteId).then(function(data) {
               scope.site = data;
               console.log(data);
           });
           scope.updateSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               SitesData.update(scope.site).then(function() {

               });
               $state.transitionTo("dashboard.inventory.sites.view", {});
           };
       }
   }
});

