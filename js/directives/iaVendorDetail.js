angular.module('inventoryApp').directive('iaVendorDetail', function(VendorData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorDetail.html',
       link: function(scope, element, attrs) {
           var vendorId = $stateParams.itemId;
           scope.delete = false;
           scope.vendor = VendorData.find(vendorId);
           scope.edit = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               $state.transitionTo("dashboard.vendor.edit", {itemId: vendorId});
           };
           scope.deleteVendorPrompt = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.delete = !scope.delete;
           };
           scope.deleteVendor = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               VendorData.destroy(vendorId);
               $state.transitionTo("dashboard.vendor.view", {});
           };
       }
   }
});