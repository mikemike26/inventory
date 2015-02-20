angular.module('inventoryApp').directive('iaSitesDetail', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesDetail.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           scope.delete = false;
           //scope.site = SitesData.find(siteId);
           SitesData.getSiteById(siteId).then(function(data) {
               scope.site = data;
               console.log(data);
           });
           scope.edit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               $state.transitionTo("dashboard.sites.edit", {itemId: siteId});
           };
           scope.deleteSitePrompt = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.delete = !scope.delete;
           };
           scope.deleteSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               SitesData.destroy(siteId);
               $state.transitionTo("dashboard.sites.view", {});
           };
       }
   }
});
