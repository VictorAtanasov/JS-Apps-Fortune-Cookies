var homeController = function(){

    function home(context){
        var data;
        cookiesData.cookies.getAll()
            .then((resData) => {
                data = resData;
                return templates.get('home')
            })
            .then((template) => {
                console.log(data.result)
                context.$element().html(template(data.result))
            })
    }

    return{
        home: home
    }
}();