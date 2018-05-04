var usersController = function(){

    function register(context){
        templates.get('auth')
            .then((template) => {
                context.$element().html(template());

                $('#logIn').on('click', function(){
                    var user = $('#username').val();
                    var pass = $('#password').val();
                    if(user === '' || pass === ''){
                        toastr.error('All fields are required')
                    } else {
                        data.user.logIn(user, pass)
                            .then((user) => {
                                toastr.success(`Hello, ${user}`);
                                context.redirect('#/');
                                document.location.reload(true);
                            })
                            .catch((data) => {
                                toastr.error(data.responseJSON)
                            })
                    }
                });

                $('#register').on('click', function(){
                    var user = $('#username').val();
                    var pass = $('#password').val();
                    if(user === '' || pass === ''){
                        toastr.error('All fields are required')
                    } else {
                        data.user.register(user, pass)
                            .then((user) => {
                                toastr.success(`Hello, ${user}! Your registration is successfull! Please Log In`);
                                $('#username').val('');
                                $('#password').val('');
                            })
                            .catch((err) => {
                                toastr.error('The username is already taken!');
                                $('#username').val('');
                                $('#password').val('');
                            })
                    }
                });

            });
    };

    return {
        register: register
    }
}();