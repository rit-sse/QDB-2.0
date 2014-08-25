describe('Admin', function(){
  beforeEach(function(){
    module('qdb');
  });

  describe('states', function(){
    describe('qdb.admin state', function(){
      beforeEach(function(){
        inject(function($state){
          this.state = $state.get('qdb.admin');
        });
      });

      it('should get the proper url', function(){
        expect(this.state.url).toBe('/admin');
      });

      it('should be asbstract', function(){
        expect(this.state.abstract).toBeTruthy();
      });

      it('should have the right template', function(){
        expect(this.state.template).toBe('<div ui-view />');
      });
    });

    describe('qdb.admin.login state', function(){
      beforeEach(function(){
        inject(function($state){
          this.state = $state.get('qdb.admin.login');
        });
      });

      it('should get the proper url', function(){
        expect(this.state.url).toBe('/login');
      });

      it('should be asbstract', function(){
        expect(this.state.abstract).toBeFalsy();
      });

      it('should have the right controller', function(){
        expect(this.state.controller).toBe('LoginController as login');
      });
    });

    describe('qdb.admin.logout state', function(){
      beforeEach(function(){
        inject(function($state){
          this.state = $state.get('qdb.admin.logout');
        });
      });

      it('should get the proper url', function(){
        expect(this.state.url).toBe('/logout');
      });

      it('should be asbstract', function(){
        expect(this.state.abstract).toBeFalsy();
      });

      it('should have the right controller', function(){
        expect(this.state.controller).toBe('LogoutController');
      });
    });

    describe('qdb.admin.index state', function(){
      beforeEach(function(){
        inject(function($state){
          this.state = $state.get('qdb.admin.index');
        });
      });

      it('should get the proper url', function(){
        expect(this.state.url).toBe('');
      });

      it('should be asbstract', function(){
        expect(this.state.abstract).toBeFalsy();
      });

      it('should have the right controller', function(){
        expect(this.state.controller).toBe('AdminIndexController as index');
      });

      it('should check logged in', function(){
        expect(this.state.resolve).toBeDefined();
      });
    });

    describe('qdb.admin.edit state', function(){
      beforeEach(function(){
        inject(function($state){
          this.state = $state.get('qdb.admin.edit');
        });
      });

      it('should get the proper url', function(){
        expect(this.state.url).toBe('/quotes/:id/edit');
      });

      it('should be asbstract', function(){
        expect(this.state.abstract).toBeFalsy();
      });

      it('should have the right controller', function(){
        expect(this.state.controller).toBe('AdminQuoteEditController as edit');
      });

      it('should check logged in', function(){
        expect(this.state.resolve).toBeDefined();
      });
    });
  })
});
