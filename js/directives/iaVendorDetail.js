angular.module('inventoryApp').directive('iaVendorDetail', function(VendorData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorDetail.html',
       link: function(scope, element, attrs) {
           var vendorId = $stateParams.itemId;
           scope.delete = false;
           VendorData.getVendorById(vendorId).then(function(data) {
               scope.vendor = angular.fromJson(data);
           });
           scope.edit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               $state.transitionTo("dashboard.inventory.vendor.edit", {itemId: vendorId});
           };
           scope.deleteVendorPrompt = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.delete = !scope.delete;
           };
           scope.deleteVendor = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               VendorData.destroy(vendorId).then(function() {
                   $state.transitionTo("dashboard.inventory.vendor.view", {});
               });
           };
       }
   }
});