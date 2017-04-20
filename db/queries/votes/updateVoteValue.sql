/* update vote value if vote by that topic id/ user id exists */
UPDATE
  votes
SET
  vote_type = ${vote_type}
where
  user_id = ${user_id}
AND
  type = ${type}
AND
  topic_id = ${topic_id}
