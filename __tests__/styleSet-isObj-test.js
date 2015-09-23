jest.dontMock('../index')
    .dontMock('lodash');

describe('styleSet', function() {

    it('if function return object', function() {

        var styleSet    = require('../index');

        expect(styleSet(
            {
                'background-color' : {
                        red : true,
                        white : false 
                    }
            }))
            .toEqual(jasmine.any(Object));
    });

});
