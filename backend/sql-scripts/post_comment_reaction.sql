CREATE TABLE IF NOT EXISTS post (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  account_id BIGINT,
  content VARCHAR(255),
  medias TEXT,
  create_at DATE,
  likes INT,
  FOREIGN KEY (account_id) REFERENCES account (id)
);

CREATE TABLE IF NOT EXISTS reaction (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  post_id BIGINT,
  comment_id BIGINT,
  account_id BIGINT,
  type VARCHAR(255),
  create_at DATE,
  FOREIGN KEY (post_id) REFERENCES post (id),
  FOREIGN KEY (comment_id) REFERENCES comment (id),
  FOREIGN KEY (account_id) REFERENCES account (id)
);


CREATE TABLE IF NOT EXISTS comment (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  account_id BIGINT,
  post_id BIGINT,
  parent_comment_id BIGINT,
  content VARCHAR(255),
  create_at DATE,
  likes INT,
  FOREIGN KEY (account_id) REFERENCES user (id),
  FOREIGN KEY (post_id) REFERENCES post (id),
  FOREIGN KEY (parent_comment_id) REFERENCES account (id)
);
