-- gets project with tags and votes
select
  projectstable.*, votestable.votes, users.username, users.avatar
from
  (select
    sum(vote_type) votes, topic_id
  from
    votes
  where
    type='project'
  group by
    topic_id
  ) votestable
right join
  (select
    proj.*, tags.tags
  FROM
    (select
      *
    from
      projects p
    where
      p.id = ${id}
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
on
  (projectstable.id = votestable.topic_id)
left join
  users
on
  projectstable.user_id = users.id
order by
  votestable.votes desc limit 25;
