select
<<<<<<< HEAD
  comments.*, users.username, users.picture
=======
  comments.*, users.username, users.avatar
>>>>>>> 70408d582e791c519851095694a48329a6f673d0
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