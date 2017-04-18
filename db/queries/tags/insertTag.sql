INSERT INTO
  tags (tag_name)
VALUES
  ($1)
ON CONFLICT (tag_name) DO NOTHING;