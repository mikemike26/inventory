angular.module('inventoryApp').factory('DummyDataHelper', function() {
    var DummyDataHelper = function(key) {
        this.key = key;
        this.data = angular.fromJson(sessionStorage[this.key]) ? angular.fromJson(sessionStorage[this.key]) : [];
        this.currentId = 0;
    };

    DummyDataHelper.prototype.getAll = function() {
        return this.data;
    };
    DummyDataHelper.prototype.create = function(value) {
        var currentData = angular.fromJson(sessionStorage[this.key]);
        value.id = currentData ? parseInt(currentData[currentData.length - 1].id) + 1 : 0;
        this.data.push(value);
        sessionStorage[this.key] = angular.toJson(this.data);
        return value;
    };
    DummyDataHelper.prototype.find = function(id) {
        console.log(this.data);
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].id === parseInt(id)) {
                return this.data[i];
            }
        }
    };
    DummyDataHelper.prototype.update = function(value) {
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].id === value.id) {
                return this.data[i] = value;
            }
        }
        sessionStorage[this.key] = angular.toJson(this.data);
    };
    DummyDataHelper.prototype.destroy = function(id) {
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].id === parseInt(id)) {
                var splice = this.data.splice(i, 1);
                sessionStorage[this.key] = angular.toJson(this.data);
                return splice;
            }
        }
    };

    return DummyDataHelper;
});