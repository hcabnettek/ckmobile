describe('CKMobile controllers', function() {
 
  describe('indexCtrl', function(){
 
    it('should create "foo" model with 2 bars', function() {
      var scope = {},
          ctrl = new indexController(scope);
 
      expect(scope.foo).toBe(true);
    });
  });
});