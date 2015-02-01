//this is a dummy service that will be refactored with ajax calls

angular.module('inventoryApp').factory('VendorData', function(DummyDataHelper){
    var vendorData = new DummyDataHelper("VendorData");
    return vendorData;
});


