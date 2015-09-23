# StyleSet

![travis](https://travis-ci.org/alexandre-garrec/styleSet.svg)

Install with npm 
-----

    $ npm install style-set



Usage
-----

Use with node.js

    var styleSet = require('style-set');

Exemple : 

    var color = "#ffffff";
    
    var style = styleSet({
        'background-color' : {
            red : true,
            white : false
        },
        color : color
    })