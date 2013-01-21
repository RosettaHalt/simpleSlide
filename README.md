# simpleSlide

名前の通りシンプルなスライダです。  
[DEMO](http://rosettahalt.github.com/simpleSlide/)

## Code

```html
<!DOCTYPE HTML>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>jQuery Sample</title>
  <link rel="stylesheet/less" type="text/css" href="less/style.less">
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.3/less.min.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
  <script type="text/javascript" src="https://raw.github.com/RosettaHalt/simpleSlide/master/js/slide.js"></script>
  <script type="text/javascript">
    $(function(){
      $('#slide').SimpleSlider({
        fadeSpeed: 1500,	// フェードのスピード
        nextSpeed: 5000,	// 次のスライドまでの待機時間
        navElement: ".slide_nav",	// ナビの要素
        type: "slideLeft"	// スライドのタイプ。
      });
    });
  </script>

</head>
<body>
  <div class="slide_box">
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
  </div>
</body>
</html>

```


スライドのタイプは現在 "fade", "slideLeft" の2つのみです。
