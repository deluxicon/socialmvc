CREATE TABLE email(
   id  			INTEGER PRIMARY KEY AUTOINCREMENT,
   sender			VARCHAR(100)    NOT NULL,
   email			VARCHAR(60)    NOT NULL,
   subject			VARCHAR(100)    NOT NULL,  
   body				TEXT    NOT NULL,   
);


-- CREATE TABLE email(id    INTEGER PRIMARY KEY AUTOINCREMENT, sender   VARCHAR(100)    NOT NULL, email   VARCHAR(60)    NOT NULL, subject   VARCHAR(100)    NOT NULL,  body    TEXT    NOT NULL   );




INSERT INTO email (sender, email , subject, body)
VALUES ('Test Sender', 'test@sender.com', 'Subject testing...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat turpis scelerisque augue porttitor gravida. Integer ut turpis erat. Curabitur sit amet fringilla justo. Mauris imperdiet aliquet venenatis. Curabitur tincidunt lobortis sapien tincidunt volutpat. Nunc volutpat felis eu varius porta. Nunc ornare velit scelerisque sapien vehicula dapibus. Duis tincidunt felis dui, vel tincidunt arcu tincidunt vel.');

-- INSERT INTO email (sender, email , subject, body) VALUES ('Test Sender', 'test@sender.com', 'Subject testing...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat turpis scelerisque augue porttitor gravida. Integer ut turpis erat. Curabitur sit amet fringilla justo. Mauris imperdiet aliquet venenatis. Curabitur tincidunt lobortis sapien tincidunt volutpat. Nunc volutpat felis eu varius porta. Nunc ornare velit scelerisque sapien vehicula dapibus. Duis tincidunt felis dui, vel tincidunt arcu tincidunt vel.');

-- INSERT INTO email (sender, email , subject, body) VALUES ('Test Person', 'test@person.com', 'Another subject to test...', 'When will these tests be over?!??!?!');