/* get all comments by topic Id */
SELECT
  *
from
  comments
WHERE
  type = $1
AND
  topic_id = $1