angular.module('inventoryApp').factory('DummyDataHelper', function() {
    var DummyDataHelper = function(startingData) {
        this.data = startingData || [];
        this.currentId = 0;
        sessionStorage[this] = this.data;
    };

    DummyDataHelper.prototype.getAll = function() {
        return this.data;
    };
    DummyDataHelper.prototype.create = function(value) {
        value.id = this.currentId++;
        this.data.push(value);
        return value;
    };
    DummyDataHelper.prototype.find = function(id) {
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].id === id) {
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
    };
    DummyDataHelper.prototype.destroy = function(id) {
        for(var i= 0, l=this.data.length; l > i; i++) {
            if(this.data[i].id === id) {
                return this.data.splice(i, 1);
            }
        }
    };

    return DummyDataHelper;
});