angular.module('inventoryApp').directive('iaSitesDetail', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesDetail.html',
       link: function(scope, element, attrs) {
           scope.site = SitesData.find($stateParams.itemId);
           console.log($stateParams.itemId);
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