angular.module('inventoryApp').directive('iaVendorNew', function(VendorData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/vendors/iaVendorNew.html',
       link: function(scope, element, attrs) {
           scope.vendor = {
               VendorContacts: [
                   {
                       FirstName: "",
                       LastName: "",
                       Title: ""
                   }
               ],
               VendorAccounts : [
                   {
                       AccountNumber: "",
                       AccountBillingPhone: "",
                       AccountBillingName: "",
                       AccountBillingCode: "",
                       AccountDescription: "",
                       AccountNotes: ""
                   }
               ]
           };
           scope.addVendor = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.vendor);
               VendorData.create(scope.vendor).then(function() {
                   $state.go('dashboard.inventory.vendor.index');
               });
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
           scope.addAccount = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.vendor.VendorAccounts.push({
                   AccountNumber: "",
                   AccountBillingPhone: "",
                   AccountBillingName: "",
                   AccountBillingCode: "",
                   AccountDescription: "",
                   AccountNotes: ""
               });
           };
           scope.removeAccount = function(event, index) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.vendor.VendorAccounts.splice(index, 1);
           };
       }
   }
});
