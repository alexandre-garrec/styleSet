var _ = require('lodash');

var styleSet =  module.exports = function styleSet (obj) {

    var style = {}

    _.each(obj , function ( val , key) {

        var value = "";

        if (_.isObject(val)) {

            _.each(val , function (n , k) {
                if (n) {
                    value = k;
                }
            })

        }
        else{
            value = val;
        }

        style[_.camelCase(key)] = value;
    })

    return style;
}