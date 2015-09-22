var _ = require('lodash');

module.exports = function styleSet (obj) {

    var style = {}

    _.each(obj , function ( val , key) {

        var value = "";

        if (_.isObject(key)) {

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
