-- combines projects, votecount, and tags (as an aggregated string)
select
  projectstable.*, votestable.votes, users.username, users.avatar
from
  (select
    proj.*, tags.tags
  FROM
    (select
      *
    from
      projects
    ) proj
  LEFT JOIN
    (select
      pt.project_id, array_to_string(array_agg(t.tag_name), ',') as tags
    from
      projects_tags pt
    left join
      tags t
    on
      (pt.tag_id = t.id)
    group by
      pt.project_id
    ) tags
  on
    (proj.id = tags.project_id)
  ) projectstable
LEFT JOIN
  (select
    sum(vote_type) votes, topic_id
  from
    votes
  where
    type='project'
  group by
    topic_id
  ) votestable
on
  (projectstable.id = votestable.topic_id)
LEFT JOIN
  users
ON
  projectstable.user_id = users.id
order by
  votestable.votes desc NULLS LAST limit 25;
