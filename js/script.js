function fadeAnime() {
    //動きの指定
    //fadeInTriggerというクラス名が要素より50px
    //上の画面内に入ったらfadeInというクラス名を明記
    //画面外にでたらクラス名を外す
    $('.fadeUpTrigger').each(function(){

        var elePos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowhight = $(window).height();

        if(scroll >= elePos - windowhight){
            $(this).addClass('fadeOut');
        }else {
            $(this).removeClass('fadeOut');
        }

    });

}

$(window).scroll(function () {
    fadeAnime();
});

$(window).on('load', function () {
    fadeAnime();
});
