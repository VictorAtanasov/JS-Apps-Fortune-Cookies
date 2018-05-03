var homeController = function(){

    function home(context){
        var data;
        dataRequester.get('api/cookies')
            .then((resData) => {
                data = resData;
                return templates.get('home')
            })
            .then((template) => {
                context.$element().html(template(data.result))
            })
    }

    return{
        home: home
    }
}();