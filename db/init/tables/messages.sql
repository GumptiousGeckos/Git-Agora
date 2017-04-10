CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  sender_id INT,
  receiver_id INT,
  content TEXT,
  created_at timestamp DEFAULT current_timestamp,
  FOREIGN KEY(sender_id) REFERENCES users,
  FOREIGN KEY(receiver_id) REFERENCES users
);