;(function($) {
  $.fn.SimpleSlider = function(options) {
    var opts = $.extend({}, $.fn.SimpleSlider.defaults, options);

    var slideIterator = 0;
    var slide_ul = $(this).find("ul");
    var slide_li = $(this).find("li");
    var slideNav = $(opts.navElement).find("li");
    var arrowNav = $(opts.arrowNavElement);
    var slideWidth = [0];
    var slideContent = $(opts.contentElement).find("li");;

    // スライド数
    var MAX_SLIDE_NUM = slide_li.length;

    var largestSlideHeight = 0;
    var largestContentHeight = 0;
    slide_li.each(function(i){
      // スライドの一番大きな高さを取得
      if(largestSlideHeight < $(this).height()){ largestSlideHeight = $(this).height(); }
      if(largestContentHeight < slideContent.eq(i).height()){ largestContentHeight = slideContent.eq(i).height(); }

      // スライドの各左位置を保存&設定
      if(opts.type == "slideLeft"){
        slideWidth.push( ($(this).width() + slideWidth[i]) );
        slide_li.eq(i).css("left", slideWidth[i]);
      }
    });
    // スライドの高さを最大値に固定
    $(this).css("height", largestSlideHeight);
    slideContent.parents(opts.contentElement).css("height", largestContentHeight);

    if(opts.type == "fade"){
      // すべてのスライドを非表示にする
      slide_li.fadeOut(0);

      //  初めのスライドを表示
      slide_li.eq(0).fadeIn(opts.fadeSpeed);
    }

    slideContent.fadeOut(0);
    slideContent.eq(0).fadeIn(opts.fadeSpeed);

    // スライド開始
    var timer_id;
    startSlide();
    function startSlide(){
      timer_id = setInterval(function(){
        nextSlide();
      }, opts.nextSpeed);
    }

    // 次のスライドへ
    function nextSlide(){
      ++slideIterator;
      if(slideIterator > MAX_SLIDE_NUM-1 ){ slideIterator = 0; }
      changeSlide(slideIterator);
    }

    // スライドの切り替え処理
    function changeSlide(iter){
      if(opts.type == "fade"){
        slide_li.fadeOut(opts.fadeSpeed);
        slide_li.eq(iter).fadeIn(opts.fadeSpeed);
      }
      else if(opts.type == "slideLeft"){
        slide_ul.stop().animate( {"left":slideWidth[iter]*-1}, opts.fadeSpeed, "easeOutQuint" );
      }

      slideContent.fadeOut(opts.fadeSpeed);
      slideContent.eq(iter).fadeIn(opts.fadeSpeed);

      // currentクラスの移動
      slideNav.removeClass("current");
      slideNav.eq(iter).addClass("current");
    }

    // ナビゲーション
    slideNav.click(function(){
      var number = $(this).index();
      slideIterator = number;
      restartSlide();
      return false;
    });

    // 前後のナビ
    var prev = arrowNav.find(".prev");
    var next = arrowNav.find(".next");
    prev.on({
      click: function(){
        slideIterator--;
        fixIterator();
        restartSlide();
        return false;
      }
    });
    next.on({
      click: function(){
        slideIterator++;
        fixIterator();
        restartSlide();
        return false;
      }
    });

    // スライドのリスタート
    function restartSlide(){
      clearInterval( timer_id );  // タイマーをリセット
      changeSlide(slideIterator);
      startSlide(); // スライドを再開
    }

    // イテレータ番号のスライドがはみ出ないように調整
    function fixIterator(){
      if(slideIterator > MAX_SLIDE_NUM-1 ){ slideIterator = 0; }
      if(slideIterator < 0 ){ slideIterator = MAX_SLIDE_NUM-1; }
    }
  };

  // デフォルトのオプション設定
  $.fn.SimpleSlider.defaults = {
    fadeSpeed: 1500,
    nextSpeed: 5000,
    navElement: ".slide_nav",
    arrowNavElement: ".arrow_nav",
    contentElement: ".slide_content",
    type: "fade"
  };
})(jQuery);
