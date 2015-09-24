var styleSet =  module.exports = function styleSet (obj) {

    var style = {}

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
            
            var styleKey = key.replace( /[-_]+/g, ' ')
                .replace( /[^\w\s]/g, '')
                .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
                .replace( / /g, '' );
                
            style[styleKey] = value;
       }
    }

    return style;
}