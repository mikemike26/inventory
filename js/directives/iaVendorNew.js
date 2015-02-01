angular.module('inventoryApp').directive('iaVendorNew', function(VendorData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaVendorNew.html',
       link: function(scope, element, attrs) {
           scope.vendor = {};

           scope.addVendor = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.vendor);
               VendorData.create(scope.vendor);
               $state.go('dashboard.vendor.view');
           }
       }
   }
});



//var sites = [
//    {
//        id: '',
//        Code:'',
//        Name: '',
//        PhoneNumber: '',
//        SiteType: '',
//        Address: {
//            AddressLine1: '',
//            AddressLine2: '',
//            City: '',
//            State: '',
//            Zip: ''
//        },
//        SiteContact: {
//            FirstName: '',
//            LastName: '',
//            EmailAddress: '',
//            PrimaryPhone: '',
//            MobilePhone: '',
//            SiteNotes: ''
//        },
//        SiteNotes: ''
//    }
//];