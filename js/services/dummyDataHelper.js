angular.module('inventoryApp').factory('DummyDataHelper', function($q) {
    var DummyDataHelper = function(key) {
        this.key = key;
        this.data = angular.fromJson(sessionStorage[this.key]) ? angular.fromJson(sessionStorage[this.key]) : [];
        this.currentId = 0;
    };

    DummyDataHelper.prototype.getAll = function() {
        var deferred = $q.defer();
        deferred.resolve(this.data);
        return deferred.promise;
    };
    DummyDataHelper.prototype.create = function(value) {
        var deferred = $q.defer();
        var currentData = angular.fromJson(sessionStorage[this.key]);
        value.Id = currentData > 0 ? parseInt(currentData[currentData.length - 1].Id) + 1 : 0;
        this.data.push(value);
        sessionStorage[this.key] = angular.toJson(this.data);
        deferred.resolve(value);
        return deferred.promise;
    };
    DummyDataHelper.prototype.find = function(id) {
        var deferred = $q.defer();
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].Id === parseInt(id)) {
                deferred.resolve(this.data[i]);
                return deferred.promise;
            }
        }
    };
    DummyDataHelper.prototype.update = function(value) {
        var deferred = $q.defer();
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].Id === value.Id) {
                this.data[i] = value;
                sessionStorage[this.key] = angular.toJson(this.data);
                deferred.resolve(this.data[i]);
                return deferred.promise;
            }
        }
    };
    DummyDataHelper.prototype.destroy = function(id) {
        var deferred = $q.defer();
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].Id === parseInt(id)) {
                var splice = this.data.splice(i, 1);
                sessionStorage[this.key] = angular.toJson(this.data);
                deferred.resolve(splice);
                return deferred.promise;
            }
        }
    };

    return DummyDataHelper;
});