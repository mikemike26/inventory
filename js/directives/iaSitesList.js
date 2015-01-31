angular.module('inventoryApp').directive('iaSitesList', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesList.html',
       link: function(scope, element, attrs) {
           scope.sites = SitesData.getAll();
           scope.goToItem = function(site) {
               console.log(site.id);
               $state.transitionTo("dashboard.sites.item", { itemId: site.id });
           };
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