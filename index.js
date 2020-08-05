
'use strict';

var moment = require('moment');//this is the older version of javascript to make sure it´ll work on any environment

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};