angular.module('inventoryApp').directive('iaCircuitsNew', function(CircuitsData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/circuits/iaCircuitsNew.html',
       link: function(scope, element, attrs) {
           scope.circuit = {};

           scope.addCircuit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.circuit);
               //CircuitsData.create(scope.circuit);
               CircuitsData.create(scope.circuit).then(function() {
                   $state.go('dashboard.inventory.circuits.index');
               });
           }
       }
   }
});
