var cookieActions = function () {

    function like() {
        var $this = $(this);
        var id = $this.attr('id');
        data.cookies.cookieActions(id, 'like')
            .then((data) => {
                $('#like' + id).text(data.result.likes)
            })
    }

    function dislike(){
        var $this = $(this);
        var id = $this.attr('id');
        data.cookies.cookieActions(id, 'dislike')
            .then((data) => {
                $('#dislike'+id).text(data.result.dislikes)
            })
    }

    return {
        like: like,
        dislike: dislike
    }

}();