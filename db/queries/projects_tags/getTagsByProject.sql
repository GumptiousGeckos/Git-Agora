SELECT
  tags.tag_name
FROM
  projects_tags, tags
where
  projects_tags.project_id = ${id}
AND
  tags.id = projects_tags.tag_id