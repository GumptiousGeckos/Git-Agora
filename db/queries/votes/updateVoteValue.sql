/* update vote value if vote by that topic id/ user id exists */
UPDATE
  votes
SET
  vote_type = $1
where
  user_id = $2
AND
  type = $3
AND
  topic_id = $4
