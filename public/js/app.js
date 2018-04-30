(function(){
    var sammyApp = Sammy('#content', function(){
        this.get('#/', homeController.home);
        this.get('#/auth/register', usersController.register);
    });

    $(function(){
        sammyApp.run('#/');
    });
}());

