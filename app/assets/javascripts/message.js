$(function(){
  function buildHTML(message){
    var image = message.image_url ? `<img src="${message.image_url}">` : '';

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
    var href = location.href
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
      $("#submitbutton").get(0).reset();
      $('.submit').attr('disabled', false);
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error');
    })
  })
});

  // config.assets.js_compressor = :uglifier



