angular.module('inventoryApp').directive('iaCircuitsEdit', function(CircuitsData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/circuits/iaCircuitsEdit.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           //scope.site = CircuitsData.find(siteId);
           CircuitsData.getSiteById(siteId).then(function(data) {
               scope.site = data;
               console.log(data);
           });
           scope.updateSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               //CircuitsData.update(scope.site);
               CircuitsData.update(scope.site).then(function() {
                   $state.transitionTo("dashboard.inventory.circuits.index", {});
               });
           };
       }
   }
});

