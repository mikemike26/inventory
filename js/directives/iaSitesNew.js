angular.module('inventoryApp').directive('iaSitesNew', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesNew.html',
       link: function(scope, element, attrs) {
           scope.site = {};

           scope.addSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.site);
               SitesData.create(scope.site);
               $state.go('dashboard.sites.view');
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