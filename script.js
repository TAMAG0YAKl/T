/*スクロールボタン。後で解析する*/
jQuery(function () {

  var appear = false;
  var pagetop = $('#page_top');

  $(window).scroll(function () {

    if ($(this).scrollTop() > 100) { //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }

    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-60px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });

  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


/*画像スクロール*/
$(function () {
  var setImg = '#photo';
  var fadeSpeed = 1600;
  var switchDelay = 5000;

  $(setImg).children('img').css({
    opacity: '0'
  });
  $(setImg + ' img:first').stop().animate({
    opacity: '1',
    zIndex: '20'
  }, fadeSpeed);

  setInterval(function () {
    $(setImg + ' :first-child').animate({
      opacity: '0'
    }, fadeSpeed).next('img').animate({
      opacity: '1'
    }, fadeSpeed).end().appendTo(setImg);
  }, switchDelay);
});
