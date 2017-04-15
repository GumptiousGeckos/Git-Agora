/* get ratings of a user */
SELECT
  *
from
  ratings
where
  user_id = $1