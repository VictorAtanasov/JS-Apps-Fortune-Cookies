var data = (function(){
    const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
        LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

    function logIn(username, password){
        var options = {
            data: {
                username: username,
                passHash: CryptoJS.SHA1(username+password).toString()
            }
        };
        return dataRequester.put('api/auth', options)
            .then((data) => {
                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, data.result.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, data.result.authKey);
                return data.result.username
            })
            .catch((data) => {
                return data
            })
    };

    function register(username, password){
        var options = {
            data: {
                username: username,
                passHash: CryptoJS.SHA1(username+password).toString()
            }
        }
        return dataRequester.post('api/users', options)
            .then((data) => {
                return data.result.username
            })
            .catch((err) => {
                return err
            })
    };

    function logOut(){
        var promise = new Promise((resolve, reject) => {
            localStorage.clear();
            resolve('You\'re successfuly logged out!')
        });

        return promise;
    }

    return {
        user: {
            logIn: logIn,
            register: register,
            logOut: logOut
        },
    }
}());