angular.module('inventoryApp').directive('iaVendorList', function(VendorData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorList.html',
       link: function(scope, element, attrs) {
           scope.vendors = VendorData.getAll();
           scope.goToItem = function(vendor) {
               $state.transitionTo("dashboard.inventory.vendor.item", { itemId: vendor.Id });
           };
       }
   }
});

