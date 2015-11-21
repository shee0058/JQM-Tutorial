
$(document).on('mobileinit',function(){
    $.mobile.loadingMessage= "Loading...";
    });

    $(document).on('pagechange', function (ev, data) {
        console.log(data.toPage.attr('id'));
        window.localStorage.setItem('PageID','id');
    });


$("#startTut").click(function(ev){
    localStorage.setItem("pageid", ev.currentTarget.id);
});

