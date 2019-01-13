$(function(){
  function buildHTML(comment){
    var html = `<div ${chat-main__message}>
                  <div ${chat-main__message-name}>
                    <%= message.user.name %>
                  </div>
                  <div ${chat-main__message-time}>
                    <%= message.created_at.strftime("%Y/%m/%d %H:%M") %>
                  </div>
                  <div ${chat-main__message-body}>
                    <% if message.content.present? %>
                      <p ${lower-message__content}>
                        <%= message.content %>
                      </p>
                    <% end %>
                    <%= image_tag message.image.url, ${lower-message__image} if message.image.present? %>
                  </div>
                </div>`
    return html;
  }
  $('submitbutton').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/messages'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.textbox').val('')
    })
    .fail(function() {
      alert('error');
    })
  })
});

  // config.assets.js_compressor = :uglifier
