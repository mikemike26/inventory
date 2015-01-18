ia.directive('listItems', function() {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/listItems.html',
       link: function(scope, element, attrs) {
           scope.items = ['cars', 'chairs', 'trucks', 'planes'];
       }
   }
});