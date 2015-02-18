angular.module('inventoryApp').directive('iaVendorList', function(VendorData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorList.html',
       link: function(scope, element, attrs) {
           VendorData.getAll().then(function(data) {
               scope.vendors = angular.fromJson(data);
           });
           scope.goToItem = function(vendor) {
               $state.transitionTo("dashboard.inventory.vendor.item", { itemId: vendor.Id });
           };
       }
   }
});

