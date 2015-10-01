/**
 * StyleSet is a Javascript library to create CSS
 * @param  {Object} obj style
 * @return {Object}     custom style 
 */
var styleSet =  module.exports = function styleSet (obj) {

    /* Use for IE compatibility */
    function Style () {};

    /* Set custom prototype */
    Style.prototype = {

        set : function(key , val) {
            this[_camelCase(key)] = val;
            return this;
        },
        remove : function(key) {
            delete this[_camelCase(key)];
            return this;
        }
        
    };

    /* Private vars */
    var _style = new Style();

    /* Constructor */
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
                                break;
                            };
                        }
                    }

                }
                else{
                    value = attr;
                }
                    
                _style.set( _camelCase(key) , value );

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
  
    /* Run */
    return _constructor();
}