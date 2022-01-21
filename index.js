'use strict';

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