angular.module('inventoryApp').factory('SitesTypesData', function() {
    var sitesTypesData = {};
    var types = [
        {
            id: '0',
            name: 'Corporate Office'
        },
        {
            id: '1',
            name: 'Field Office'
        },
        {
            id: '2',
            name: 'Service'
        }
    ];
    sitesTypesData.getAll = function() {
        return types;
    };

    return sitesTypesData;
});