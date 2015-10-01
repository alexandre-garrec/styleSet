jest.dontMock('../index');


describe('styleSet', function() {

    it('verify result', function() {

        var styleSet = require('../index');
        var red = "red";

        var expected = { color : 'red' , padding : "1px" };

        var val = styleSet({color:red});

        val.set('padding' , '1px');
        

        expect(val).isSameObject(expected);
    });
});
  