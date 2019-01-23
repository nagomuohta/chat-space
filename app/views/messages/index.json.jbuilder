if @new_message.present?
  json.array! @new_message
  json.name @message.user.name
  json.content @message.content
  json.strftime @message.created_at
  json.image_url @message.image_url
  json.id @message.id
end
