SELECT
  user_id
FROM
  collaborators
where
  topic_id = $1