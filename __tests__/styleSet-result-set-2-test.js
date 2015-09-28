jest.dontMock('../index');

describe('styleSet', function() {

    it('verify result', function() {

        var styleSet = require('../index');
        var red = "red";

        var expected = { padding : "2px" , margin : '10px' , height : '200px'};

        var style = styleSet()
            .set('padding' , '1px')
            .set('padding' , '2px')
            .set('margin' , '10px');

        style.set('height' , '200px');

        expect(style).toEqual(expected);
    });
});
  