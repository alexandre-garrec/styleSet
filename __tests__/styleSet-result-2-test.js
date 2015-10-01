jest.dontMock('../index');

describe('styleSet', function() {

    it('verify result', function() {

        var styleSet = require('../index');

        var current = styleSet({
                'background-color' : {
                        red : false,
                        white : true 
                    }
            });


        var expected = { backgroundColor: 'white' };


        expect(current).isSameObject(expected);
    });
});
  