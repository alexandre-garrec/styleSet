var matchers = {

  isSameObject:  function isSameObject(expected){

        var actual = this.actual;

        return JSON.stringify(actual) == JSON.stringify(expected);
    }
    
};

jasmine.getEnv().beforeEach(function () {
    this.addMatchers(matchers);
});