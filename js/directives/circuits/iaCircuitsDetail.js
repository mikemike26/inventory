angular.module('inventoryApp').directive('iaCircuitsDetail', function(CircuitsData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/circuits/iaCircuitsDetail.html',
       link: function(scope, element, attrs) {
           var circuitsId = $stateParams.itemId;
           scope.delete = false;
           scope.hide = true;
           SitesData.getSiteById(circuitsId).then(function(data) {
               scope.site = data;
               scope.hide = false;
               console.log(data);
           });
           scope.edit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               $state.transitionTo("dashboard.circuits.edit", {itemId: circuitsId});
           };
           scope.deleteCircuitPrompt = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.delete = !scope.delete;
           };
           scope.deleteCircuit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               CircuitsData.destroy(circuitsId).then(function() {
                   $state.transitionTo("dashboard.circuits.index", {});
               });
           };
       }
   }
});
