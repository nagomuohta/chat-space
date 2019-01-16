$(function(){
  function buildHTML(message){
    // var image = image;
    // if ( meesage.image.present? ){
    //  ( message.image ) : ""
    // }
    var image = message.image_url !== null ? `<img src="${message.image_url}">` : '';

    var html = `<div class ="chat-main__message" >
                  <div class="chat-main__message-name" >
                       ${message.name}
                  </div>
                  <div class="chat-main__message-time" >
                       ${message.strftime}
                  </div>
                  <div class="chat-main__message-body" >
                    ${message.content}
                    <p>${image}</p>
                  </div>
                  </div>
                </div>`
    return html;
  }
  $("#submitbutton").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__body--messages-list').append(html);
      $('.description').val('');
      $('.fa-image').val('');
      $('.submit').attr('disabled', false);
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error');
    })
  })
});

  // config.assets.js_compressor = :uglifier


    // '(変更点)

//   dateがformdata
      // xhr HTTPリクエストを投げてレスポンスを受け取る
      //textstatus エラー情報受取
// settings 通信時の設定パラメータ
// null  nill 違い
// binding.pry
// console.log
