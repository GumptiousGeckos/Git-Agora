SELECT
  *
from
  messages
where
  sender_id = $1
AND
  receiver_id = $2