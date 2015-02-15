angular.module('inventoryApp').directive('iaVendorNew', function(VendorData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorNew.html',
       link: function(scope, element, attrs) {
           scope.vendor = {
               VendorContacts: [
                   {
                       FirstName: "",
                       LastName: "",
                       Title: ""
                   }
               ]
           };
           scope.addVendor = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.vendor);
               VendorData.create(scope.vendor);
               $state.go('dashboard.inventory.vendor.view');
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
