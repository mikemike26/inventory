//this is a dummy service that will be refactored with ajax calls

angular.module('inventoryApp').factory('SitesData', function(DummyDataHelper){
    var sitesData = new DummyDataHelper("SitesData");
    return sitesData;
});


