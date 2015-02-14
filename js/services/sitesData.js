//this is a dummy service that will be refactored with ajax calls

angular.module('inventoryApp').factory('SitesData', function(DummyDataHelper, $q, $http){
    //var sitesData = new DummyDataHelper("SitesData");
    var sitesData = {};
    sitesData.getAll = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://circi-azizdev.azurewebsites.net/api/sites'
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    sitesData.getSiteById = function(id) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://circi-azizdev.azurewebsites.net/api/sites/'+id
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    sitesData.update = function(data) {
        var deferred = $q.defer();
        $http({
            method: 'PUT',
            url: 'https://circi-azizdev.azurewebsites.net/api/sites/',
            data: angular.toJson(data)
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    sitesData.create = function(data) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: 'https://circi-azizdev.azurewebsites.net/api/sites/',
            data: angular.toJson(data)
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };

    //https://circi-azizdev.azurewebsites.net/api/sites
    return sitesData;
});


