SELECT
  favorites.type, favorites.favorite_id, users.username, users.id, projects.title projecttitle, projects.user_id, articles.title articletitle, articles.id, articles.author
FROM
  favorites
LEFT JOIN
  projects
    ON
  favorites.type = 'project' And favorites.favorite_id = projects.id
LEFT JOIN
  articles
    ON
  favorites.type = 'article' And favorites.favorite_id = articles.id
LEFT JOIN
  users
    ON
  favorites.type = 'user' And favorites.favorite_id = users.id
WHERE
  favorites.user_id = ${user_id}
