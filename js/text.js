
function slideAnime(){

  $('.leftAnime').each(function(){

    var elePos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowhight = $(window).height();

    if(scroll >= elePos - windowhight){
      //左から右に移動するクラスを付与
      $(this).addClass("slideAnimeLeftRight");
      //要素を左枠外へ移動し、アニメで左から元の位置に移動
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    }else {
      //左から右へ表示するクラスを削除
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }

  });
}

$(window).scroll(function () {
    slideAnime();
});

$(window).on('load', function () {
    slideAnime();
});
