select projectstable.*, votestable.votes, uservote.vote_type from 
(select sum(vote_type) votes, topic_id from votes where type='project' group by topic_id) votestable 
left join 
  (select * from projects) projectstable 
on (projectstable.id = votestable.topic_id) 
left join (select vote_type, topic_id from votes where user_id = ${user_id}) uservote 
on (uservote.topic_id = projectstable.id) order by votestable.votes desc limit 25;
