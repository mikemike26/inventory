angular.module('inventoryApp').directive('iaSitesNew', function(SitesData, $state) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/sites/iaSitesNew.html',
       link: function(scope, element, attrs) {
           scope.y = "(999) 999-9999";
           scope.site = {
               SiteContacts: [
                   {
                       FirstName: "",
                       LastName: "",
                       Title: "",
                       EmailAddress: "",
                       PrimaryPhone: "",
                       MobilePhone: ""
                   }
               ]
           };

           scope.addContact = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.site.SiteContacts.push({
                   FirstName: "",
                   LastName: "",
                   Title: "",
                   EmailAddress: "",
                   PrimaryPhone: "",
                   MobilePhone: ""
               });
           };
           scope.removeContact = function(event, index) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               scope.site.SiteContacts.splice(index, 1);
           };
           scope.addSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               console.log(scope.site);
               SitesData.create(scope.site).then(function() {
                   $state.go('dashboard.inventory.sites.index');
               });
           }
       }
   }
});
