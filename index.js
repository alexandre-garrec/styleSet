/**
 * StyleSet is a Javascript library to create CSS
 * @param  {Object} obj style
 * @return {Object}     custom style 
 */
var styleSet =  module.exports = function styleSet (obj) {

    // Private vars
    var _style = {}

    // Custom proto
    _style.__proto__.set = function(key , val) {
        _style[_camelCase(key)] = val;
        return this;
    };

    _style.__proto__.remove = function(key) {
        delete _style[_camelCase(key)];
        return this;
    };


    // Constructor
    var _constructor = function() {

        for(var key in obj) { 

           if (obj.hasOwnProperty(key)) {
                var value = "";
                var attr = obj[key];

                if (attr instanceof Object) {

                    for(var k in attr) { 
                        if (attr.hasOwnProperty(k)) {
                            var n = attr[k];

                            if (n) {
                                value = k;
                            };
                        }
                    }

                }
                else{
                    value = attr;
                }
                    
                _style[_camelCase(key)] = value;

           }
        }

        return _style;

    };


    /**
     * Convert string to camel case
     * @param  {String} string
     * @return {String}         String in camel case
     */
    var _camelCase = function (string) {
        return string.replace( /[-_]+/g, ' ')
                .replace( /[^\w\s]/g, '')
                .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
                .replace( / /g, '' );
    };
  
    // Run
    return _constructor();
}
