(function(){
    var sammyApp = Sammy('#content', function(){
        this.get('#/', function(context){
            context.redirect('#/home')
        });
        this.get('#/home', homeController.home);
        this.get('#/home/add', cookiesController.add);
        this.get('#/home/:name', cookiesController.cookieByCategory);
        this.get('#/auth/register', usersController.register);
        this.get('#/my-cookie', cookiesController.getCookie);
    });

    $(function(){
        sammyApp.run('#/');
        if(localStorage.getItem('signed-in-user-auth-key')){
            $('#register-btn').addClass('hidden');
            $('#logout-btn').addClass('block');
            $('#my-cookie').addClass('block');
            $('#add-cookie').addClass('block');
        } else {
            $('#register-btn').addClass('block');
            $('#logout-btn').addClass('hidden');
            $('#my-cookie').addClass('hidden');
            $('#add-cookie').addClass('hidden');
        };

        $('#logout-btn').on('click', function(){
            data.user.logOut()
                .then((msg) => {
                    toastr.success(msg);
                    document.location = '#/';
                    document.location.reload(true);
                });
        });
    });
}());


