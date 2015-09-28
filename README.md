# StyleSet

StyleSet is a Javascript library to create CSS

[![travis](https://travis-ci.org/alexandre-garrec/styleSet.svg)](https://travis-ci.org/alexandre-garrec/styleSet)
[![npm](https://img.shields.io/npm/v/style-set.svg?style=flat-square)](https://www.npmjs.com/package/style-set)


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
    });

    style.set('height' , '200px');