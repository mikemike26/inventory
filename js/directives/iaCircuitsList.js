angular.module('inventoryApp').directive('iaCircuitsList', function(CircuitsData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaCircuitsList.html',
       link: function(scope, element, attrs) {
           scope.circuits = CircuitsData.getAll();
           //CircuitsData.getAll().then(function(data) {
           //    scope.circuits = data;
           //});
           console.log(scope.circuits);
           scope.goToItem = function(circuit) {
               $state.transitionTo("dashboard.inventory.circuits.item", { itemId: circuit.Id });
           };
       }
   }
});