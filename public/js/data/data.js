var cookiesData = (function(){
    function cookiesGet(){
        var promise = new Promise((resolve, reject) => {
            $.get('api/cookies', function(data){
                return resolve(data);
            });
        });
        return promise;
    };

    return {
        cookies: {
            getAll: cookiesGet
        }
    }
}());