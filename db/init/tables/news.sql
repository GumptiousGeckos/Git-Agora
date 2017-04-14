CREATE TABLE IF NOT EXISTS news (
  id serial PRIMARY KEY,
  title text,
  author text,
  description text,
  url text,
  photo text,
  published_at text,
  source VARCHAR(25),
  unique text,
  created_at timestamp DEFAULT current_timestamp,
);