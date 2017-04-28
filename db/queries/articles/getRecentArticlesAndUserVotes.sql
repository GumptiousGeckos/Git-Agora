select articlestable.*, votestable.votes, uservote.vote_type 
from 
  (
    select * from articles
  ) articlestable 
left join 
  (
  select sum(vote_type) votes, topic_id 
  from votes 
  where type='article' 
  group by topic_id) votestable 
on (articlestable.id = votestable.topic_id) 
left join 
  (select vote_type, topic_id 
    from votes 
    where user_id = ${user_id}) uservote 
on (uservote.topic_id = articlestable.id) 
order by articlestable.published_at desc NULLS LAST limit 25;