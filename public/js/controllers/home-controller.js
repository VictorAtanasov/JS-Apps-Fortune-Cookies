var homeController = function(){

    function home(context){
        var cookieData;
        data.cookies.all()
            .then((resData) => {
                cookieData = resData;
                //console.log(cookieData.result)
                return templates.get('home')
            })
            .then((template) => {
                var cookies = cookieData.result;
                console.log(cookies)
                context.$element().html(template(cookies));

                $('.like').on('click', cookieActions.like);
                $('.dislike').on('click', cookieActions.dislike);
            })
    };

    return{
        home: home
    }
}();