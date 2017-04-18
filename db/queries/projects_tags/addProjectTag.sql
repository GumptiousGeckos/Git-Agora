INSERT INTO
  projects_tags (tag_id, project_id)
VALUES
  ((SELECT id 
    from tags 
    where tag_name=$1
    ), $2)