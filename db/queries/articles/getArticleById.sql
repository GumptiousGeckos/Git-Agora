select
  articlestable.*, votestable.votes 
from
  (select * from articles where id = ${id}) articlestable 
left join
  (select sum(vote_type) votes, topic_id from votes where type='article' group by topic_id) votestable 
on
  (articlestable.id = votestable.topic_id);