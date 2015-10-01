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
            };

        var expected = { backgroundColor: 'red' , color : "red" };


        expect(styleSet(current)).isSameObject(expected);
    });
});
  