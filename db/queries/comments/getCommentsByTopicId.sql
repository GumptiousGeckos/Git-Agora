select
  comments.*, users.username, users.avatar, users.id
from
  comments
LEFT JOIN
  users
ON
  comments.user_id = users.id
WHERE
  comments.type = ${type}
AND
  comments.topic_id = ${topic_id};