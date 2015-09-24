jest.dontMock('../index');

describe('styleSet', function() {

    it('verify result', function() {

        var styleSet = require('../index');

        var current = {
                'background-color' : {
                        red : true,
                        white : false 
                    }
            };

        var expected = { backgroundColor: 'red' };

        expect(styleSet(current)).toEqual(expected);
    });
});
  