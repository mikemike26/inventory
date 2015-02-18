angular.module('inventoryApp').directive('iaVendorEdit', function(VendorData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorEdit.html',
       link: function(scope, element, attrs) {
           var vendorId = $stateParams.itemId;
           VendorData.find(vendorId).then(function(data) {
               scope.vendor = angular.fromJson(data);
           });
           scope.updateVendor = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               VendorData.update(scope.vendor);
               $state.transitionTo("dashboard.inventory.vendor.view", {});
           };
           scope.addContact = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.vendor.VendorContacts.push({
                   FirstName: "",
                   LastName: "",
                   Title: ""
               });
           };
           scope.removeContact = function(event, index) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.vendor.VendorContacts.splice(index, 1);
           };
       }
   }
});

