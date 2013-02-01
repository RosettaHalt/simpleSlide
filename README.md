# simpleSlide

名前の通りシンプルなスライダです。  
単体でもよく使うAPIを使用して組んでいるのでそれなりに読みやすいのかなぁと。  
[DEMO1](http://rosettahalt.github.com/simpleSlide/)  
[DEMO2](http://rosettahalt.github.com/simpleSlide/index2.html)  
[DEMO3](http://rosettahalt.github.com/simpleSlide/index3.html)  
[sample](http://rosettahalt.github.com/simpleSlide/sample.html)

## Code
オプションは以下のとおりです。  
navElementは番号でのナビゲーション、  
arrowNavElementは前後のナビゲーション、  
contentElementはメインスライドのスライド要素(画像の説明文など)。  
typeの指定は現在 "fade", "slideLeft" の2つのみです。  
### jQuery
```html
$(function(){
  $('#slide').SimpleSlider({
    fadeSpeed: 1500,  // フェードのスピード
    nextSpeed: 5000,	// 次のスライドまでの待機時間
    navElement: ".slide_nav",	// ナビの要素
    arrowNavElement: ".arrow_nav",  // 前後のナビの要素
    contentElement: ".slide_content", // メインのスライド以外のコンテンツ要素
    type: "slideLeft"	// スライドのタイプ。
  });
});

```

### HTML
書く要素はul>liの形で書いて下さい。  
```html
<ul>
  <li></li>
</ul>
```

#### 例
```html
<div id="slide">
  <ul class="cf">
    <li><a href=""><img src="img/img.png" height="480" width="720" alt=""></a></li>
    <li><a href=""><img src="img/img.png" height="480" width="720" alt=""></a></li>
    <li><a href=""><img src="img/img.png" height="480" width="720" alt=""></a></li>
    <li><a href=""><img src="img/img.png" height="480" width="720" alt=""></a></li>
    <li><a href=""><img src="img/img.png" height="480" width="720" alt=""></a></li>
  </ul>
</div>
<div class="slide_nav cf">
  <ul class="right cf">
    <li class="current"><a href="">1</a></li>
    <li><a href="">2</a></li>
    <li><a href="">3</a></li>
    <li><a href="">4</a></li>
    <li><a href="">5</a></li>
  </ul>
</div>
<div class="arrow cf">
  <ul>
    <li class="prev"><a href="" title="">prev</a></li>
    <li class="next"><a href="" title="">next</a></li>
  </ul>
</div>
```

