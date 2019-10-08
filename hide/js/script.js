$(function(){
  $('#logo').click(function () {
    $(this).css("background-color","red");
  });

  $('.tab').each(function(){
    // リンク先のURLを取得
      var url = $(this).attr('href');
    // 現在表示されているページのURLを取得し、リンク先のURLと照合
      if(location.href.match(url)) {
       // マッチすれば、「class="current"」を付加
          $(this).addClass('current');
       // マッチしなければ、「class="current"」を削除
        } else {
        $(this).removeClass('current');
        }
     });
});

//上のがtoggleClassでなんとか書き換えられないか思案中。
//var url = $(this).attr('href');
//$(location.href.match(url)).toggleClass('current');
