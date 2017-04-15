CREATE TABLE IF NOT EXISTS articles (
  id serial PRIMARY KEY,
  title text,
  author text,
  description text,
  url text,
  url_to_image text,
  published_at text,
  source VARCHAR(25),
  unique_id text,
  created_at timestamp DEFAULT current_timestamp
);