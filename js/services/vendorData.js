//this is a dummy service that will be refactored with ajax calls

angular.module('inventoryApp').factory('VendorData', function(DummyDataHelper, $q, $http){
    var vendorData = new DummyDataHelper("VendorData");
    //var vendorData = {};
    //vendorData.getAll = function() {
    //    var deferred = $q.defer();
    //    $http({
    //        method: 'GET',
    //        url: 'https://circi-azizdev.azurewebsites.net/api/vendors'
    //    }).success(function (data, status, headers, config) {
    //        deferred.resolve(data);
    //        console.log(data);
    //    }).error(function (data, status, headers, config) {
    //        console.log("Error! "+status);
    //        deferred.reject(status);
    //    });
    //    return deferred.promise;
    //};
    //vendorData.find = function(id) {
    //    var deferred = $q.defer();
    //    $http({
    //        method: 'GET',
    //        url: 'https://circi-azizdev.azurewebsites.net/api/vendors/'+id
    //    }).success(function (data, status, headers, config) {
    //        deferred.resolve(data);
    //    }).error(function (data, status, headers, config) {
    //        console.log("Error! "+status);
    //        deferred.reject(status);
    //    });
    //    return deferred.promise;
    //};
    //vendorData.update = function(data) {
    //    var deferred = $q.defer();
    //    $http({
    //        method: 'PUT',
    //        url: 'https://circi-azizdev.azurewebsites.net/api/vendors',
    //        data: angular.toJson(data),
    //        dataType: 'json',
    //        contentType: 'application/json'
    //    }).success(function (data, status, headers, config) {
    //        deferred.resolve(data);
    //    }).error(function (data, status, headers, config) {
    //        console.log("Error! "+status);
    //        deferred.reject(status);
    //    });
    //    return deferred.promise;
    //};
    //vendorData.create = function(data) {
    //    var deferred = $q.defer();
    //    $http({
    //        method: 'POST',
    //        url: 'https://circi-azizdev.azurewebsites.net/api/vendors',
    //        data: angular.toJson(data),
    //        dataType: 'json',
    //        contentType: 'application/json'
    //    }).success(function (data, status, headers, config) {
    //        deferred.resolve(data);
    //    }).error(function (data, status, headers, config) {
    //        console.log("Error! "+status);
    //        deferred.reject(status);
    //    });
    //    return deferred.promise;
    //};
    //vendorData.destroy = function(id) {
    //    var deferred = $q.defer();
    //    $http({
    //        method: 'DELETE',
    //        url: 'https://circi-azizdev.azurewebsites.net/api/vendors/'+id
    //    }).success(function (data, status, headers, config) {
    //        deferred.resolve(data);
    //    }).error(function (data, status, headers, config) {
    //        console.log("Error! "+status);
    //        deferred.reject(status);
    //    });
    //    return deferred.promise;
    //};
    return vendorData;
});


