"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(init) {
        Object.assign(this, init);
        this.Modified = new Array();
        this.UserResults = new Array();
    }
    return User;
}());
exports.User = User;
var Data = (function () {
    function Data(init) {
        Object.assign(this, init);
    }
    return Data;
}());
exports.Data = Data;
