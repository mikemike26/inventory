angular.module('inventoryApp').directive('iaSitesDetail', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/iaSitesDetail.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           scope.delete = false;
           scope.site = SitesData.find(siteId);
           console.log(siteId);
           scope.deleteSitePrompt = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.delete = !scope.delete;
           };
           scope.deleteSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               SitesData.destroy(siteId);
               $state.transitionTo("dashboard.sites.view", {});
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