(function(){
    var sammyApp = Sammy('#content', function(){
        this.get('#/', homeController.home);
        this.get('#/auth/register', usersController.register);
    });

    $(function(){
        sammyApp.run('#/');
        if(localStorage.getItem('signed-in-user-auth-key')){
            $('#register-btn').addClass('hidden');
            $('#logout-btn').addClass('block');
        } else {
            $('#register-btn').addClass('block');
            $('#logout-btn').addClass('hidden');
        };

        $('#logout-btn').on('click', function(){
            console.log(42)
            data.user.logOut()
                .then((msg) => {
                    toastr.success(msg);
                    document.location = '#/';
                    document.location.reload(true);
                });
        });
    });
}());

// $(function(){
//     if(localStorage.getItem('signed-in-user-auth-key')){
//         $('#register-btn').addClass('hidden');
//         $('#logout-btn').addClass('block');
//     } else {
//         $('#register-btn').addClass('block');
//         $('#logout-btn').addClass('hidden');
//     }
// });

