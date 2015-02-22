angular.module('inventoryApp').directive('iaSitesEdit', function(SitesData, $state, $stateParams) {
   return {
       restrict: 'C',
       replace: true,
       templateUrl: 'templates/directives/sites/iaSitesEdit.html',
       link: function(scope, element, attrs) {
           var siteId = $stateParams.itemId;
           //scope.site = SitesData.find(siteId);
           SitesData.find(siteId).then(function(data) {
               scope.site = data;
               console.log(data);
           });
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
           scope.updateSite = function(event) {
               event.preventDefault ? event.preventDefault() : event.returnValue = false;
               SitesData.update(scope.site).then(function() {
                   $state.transitionTo("dashboard.inventory.sites.index", {});
               });
           };
       }
   }
});

