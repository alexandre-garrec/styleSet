jest.dontMock('../index');

describe('styleSet', function() {

    it('verify result', function() {

        var styleSet = require('../index');
        var red = "red";

        var current = {
                'background-color' : {
                        red : true,
                        white : false 
                    },
                color : red,
                "z-index" : 11,
                height : "5555px"
            };

        var expected = { backgroundColor: 'red' , color : "red" , zIndex : 11 , height : "5555px"};

        expect(styleSet(current)).toEqual(expected);
    });
});
  