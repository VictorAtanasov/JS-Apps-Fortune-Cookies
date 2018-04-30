var usersController = function(){

    function register(context){
        templates.get('auth')
            .then((template) => {
                context.$element().html(template());
            });
    };

    return {
        register: register
    }
}();