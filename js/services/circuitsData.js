angular.module('inventoryApp').factory('CircuitsData', function(DummyDataHelper, $q, $http){
    //var circuitsData = new DummyDataHelper("CircuitsData");
    var circuitsData = {};
    circuitsData.getAll = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://circi-azizdev.azurewebcircuits.net/api/circuits'
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    circuitsData.find = function(id) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://circi-azizdev.azurewebcircuits.net/api/circuits/'+id
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    circuitsData.update = function(data) {
        var deferred = $q.defer();
        $http({
            method: 'PUT',
            url: 'https://circi-azizdev.azurewebcircuits.net/api/circuits',
            data: angular.toJson(data),
            dataType: 'json',
            contentType: 'application/json'
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    circuitsData.create = function(data) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: 'https://circi-azizdev.azurewebcircuits.net/api/circuits',
            data: angular.toJson(data),
            dataType: 'json',
            contentType: 'application/json'
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    circuitsData.destroy = function(id) {
        var deferred = $q.defer();
        $http({
            method: 'DELETE',
            url: 'https://circi-azizdev.azurewebcircuits.net/api/circuits/'+id
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            console.log("Error! "+status);
            deferred.reject(status);
        });
        return deferred.promise;
    };
    return circuitsData;
});


