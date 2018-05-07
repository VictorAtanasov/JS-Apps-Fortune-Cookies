var cookiesController = function(){

    function getCookie(context){
        var cookieData;
        
        data.cookies.getCookie()
            .then((resData) => {
                cookieData = resData;
                return templates.get('cookie');
            })
            .then((template) => {
                context.$element().html(template(cookieData.result));
                $('.like').on('click', cookieActions.like);
                $('.dislike').on('click', cookieActions.dislike);
            })
    }

    function cookieByCategory(context){
        var category = context.params.name;
        var data;
        dataRequester.get('api/cookies')
            .then((resData) => {
                data = resData.result.filter(el => el.category === category);
                return templates.get('by-category');
            })
            .then((template) => {
                context.$element().html(template(data));
                $('.like').on('click', cookieActions.like);
                $('.dislike').on('click', cookieActions.dislike);
            });
    };

    function add(context){
        templates.get('add-cookie')
            .then((template) => {
                context.$element().html(template());

                $('#addCookie').on('click', function(){
                    var inputData = {
                        text: $('#text').val(),
                        category: $('#category').val(),
                        img: $('#img').val().toString()
                    }
                    data.cookies.addCookie(inputData)
                        .then((resData) => {
                            toastr.success(`Your Cookie ${resData.result.text} is added!`);
                            context.redirect('#/');
                        })
                });
            })
    }

    return {
        getCookie: getCookie,
        cookieByCategory: cookieByCategory,
        add: add
    }
}();