   $(window).on('beforeunload', function() {

            window.setTimeout(function() {
                $(window).scrollTop(0); 
            }, 0);

});