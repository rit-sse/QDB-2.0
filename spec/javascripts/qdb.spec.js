describe('qdb module', function(){
  beforeEach(function(){
    module('qdb');
  });

  describe('qdb state', function(){
    beforeEach(function(){
      inject(function($state){
        this.qdb = $state.get('qdb');
      });
    });

    it('should get the proper url', function(){
      expect(this.qdb.url).toBe('/qdb');
    });

    it('should be asbstract', function(){
      expect(this.qdb.abstract).toBeTruthy();
    });

    it('should have the right template', function(){
      expect(this.qdb.template).toBe('<div ui-view />');
    });
  });

  describe('goToTag', function(){
    it('should go to the proper state', function(){
      inject(function($rootScope, $state){
        $rootScope.$apply(function(){
          $rootScope.goToTag({detail: {name: 'tag'} });
        });
        expect($state.current.name).toBe('qdb.tags.show');
      });
    });
  });

  describe('goToQuote', function(){
    it('should go to the proper state', function(){
      inject(function($rootScope, $state){
        $rootScope.$apply(function(){
          $rootScope.goToQuote({detail: {id: 1} });
        });
        expect($state.current.name).toBe('qdb.quotes.show');
      });
    });
  });
});
