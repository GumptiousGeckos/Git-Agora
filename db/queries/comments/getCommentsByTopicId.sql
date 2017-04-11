/* get all comments by topic Id */
SELECT
  *
from
  comments
WHERE
  topic_id = $1