'use strict';
var uuid = require("uuid");
var builder = require('xmlbuilder');

/**
 * What this library needs to do?
 * 1) Generate Name, Profile_Image, ID, Password, Email with a Promise
 * 2) return in JSON or XML
 * 3) Create and validate JWT with custom fields input
 */
/*module.exports = async function initialize() {
    var results;
    return results;
};*/

var exports = module.exports = {};
exports.GenerateRandomUser = function(a) {
    return new Promise((resolve, reject) => {
        if (a == null) {
            resolve("It is null")
        } else {
            reject("It is not null")
        }
    });
};

exports.GenerateUserName = function(a) {
    return new Promise((resolve, reject) => {
        generateName('female');
        generateName('male');
        generateName();
        if (a == null) {
            resolve("It is null")
        } else {
            reject("It is not null")
        }
    });
};

exports.GenerateUserPassword = function(a) {
    return new Promise((resolve, reject) => {
        if (a == null) {
            resolve("It is null")
        } else {
            reject("It is not null")
        }
    });
};

exports.GenerateUserEmail = function(a) {
    return new Promise((resolve, reject) => {
        if (a == null) {
            resolve("It is null")
        } else {
            reject("It is not null")
        }
    });
};

exports.GenerateUserID = function(a) {
    return new Promise((resolve, reject) => {
        if (a == null) {
            resolve("It is null")
        } else {
            reject("It is not null")
        }
    });
};

exports.GenerateUserProfileImage = function(a) {
    return new Promise((resolve, reject) => {
        if (a == null) {
            resolve("It is null")
        } else {
            reject("It is not null")
        }
    });
};

function exportString() {

}

function exportJson(response) {
    return JSON.stringify(response);
}

//response must be a json
function exportXML(response) {
    return builder.create('root')
        .ele('xmlbuilder')
        .ele('name', {'type': 'tag'}, 'value')
        .end({pretty: true});
}