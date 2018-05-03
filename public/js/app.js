(function(){
    var sammyApp = Sammy('#content', function(){
        this.get('#/', homeController.home);
        this.get('#/auth/register', usersController.register);
    });

    $(function(){
        sammyApp.run('#/');
    });
}());

$(function(){
    if(localStorage.getItem('signed-in-user-auth-key')){
        $('#register-btn').addClass('hidden');
        $('#logout-btn').addClass('block');
    } else {
        $('#register-btn').addClass('block');
        $('#logout-btn').addClass('hidden');
    }
});

