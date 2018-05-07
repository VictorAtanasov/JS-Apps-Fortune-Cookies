var dataRequester = (function(){

    function requester(url, method, options){
        options = options || {};
        var headers = options.headers || {},
            data = options.data || undefined;
    
        var promise = new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                method: method,
                contentType: 'application/json',
                headers: headers,
                data: JSON.stringify(data),
                success: function(res){
                    resolve(res)
                },
                error: function(err){
                    reject(err)
                }
            })
        });
        return promise;
    };

    function get(url, options){
        return requester(url, 'GET', options)
    };

    function post(url, options){
        return requester(url, 'POST', options)
    }

    function put(url, options){
        return requester(url, 'PUT', options)
    }


    return {
        get: get,
        post: post,
        put: put,
    }
}());