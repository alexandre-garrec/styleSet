jest.dontMock('../index');

describe('styleSet', function() {

    it('verify result', function() {

        var styleSet = require('../index');
        var red = "red";


        var expected = { padding : "1px" , color : 'red'};

        var val = styleSet({color:red}).set('padding' , '1px');


        expect(val).toEqual(expected);
    });
});
  