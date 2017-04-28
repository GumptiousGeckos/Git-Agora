select p.*, votestable.votes, projectstable.tags, uservote.vote_type from projects p
left join
  projects_tags pt
on (p.id = pt.project_id)
left join
  (select sum(vote_type) votes, topic_id from votes
  where type='project'
  group by topic_id
  ) votestable
on (votestable.topic_id = p.id)
left join
  (select proj.*, tags.tags FROM
    (select * from projects
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
  (projectstable.id = p.id)
left join
  (select vote_type, topic_id
  from votes
  where user_id = ${user_id}
  ) uservote
on (uservote.topic_id = projectstable.id)
where pt.tag_id=
(select t.id from tags t
where tag_name=${tag_name})
