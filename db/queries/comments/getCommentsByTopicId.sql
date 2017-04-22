select
  comments.*, users.username, users.avatar, users.id
from
  comments
LEFT JOIN
  users
ON
  comments.username = users.username
WHERE
  comments.type = ${type}
AND
  comments.topic_id = ${topic_id};