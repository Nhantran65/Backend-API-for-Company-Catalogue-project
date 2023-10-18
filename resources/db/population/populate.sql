USE company_catalogue_api;

INSERT INTO company
  (id, name, description, location, website, logo, industry, established, other_details)
VALUES
  (1, "TechBreeze", "Leading provider of cloud-based solutions.", "San Francisco, CA", "www.techbreeze.com", "www.techbreeze.com/logo.png", "Cloud Services", "2015-03-21", ""),
  (2, "SoftSprint", "Software development and consultancy firm.", "Austin, TX", "www.softsprint.com", "www.softsprint.com/logo.png", "Software Development", "2012-07-18", ""),
  (3, "NexaTech", "Pioneers in artificial intelligence and machine learning solutions.", "Boston, MA", "www.nexatech.com", "www.nexatech.com/logo.jpg", "Artificial Intelligence", "2017-05-15", ""),
  (4, "SkywardSoft", "Developers of top-tier mobile applications with a global user base.", "San Diego, CA", "www.skywardsoft.net", "www.skywardsoft.net/logo.jpg", "Mobile Application Development", "2011-02-10", ""),
  (5, "DataFlow Systems", "Specialists in big data analytics and visualization.", "Seattle, WA", "www.dataflow.com", "www.dataflow.com/logo.jpg", "Data Analytics", "2016-10-24", ""),
  (6, "QuantumLeap Computing", "Front-runners in quantum computing research and application.", "Houston, TX", "www.quantumleap.org", "www.quantumleap.org/logo.jpg", "Quantum Computing", "2019-03-21", ""),
  (7, "GreenTech Innovations", "Championing sustainable technology solutions for a greener planet.", "Denver, CO", "www.greentechinnovations.com", "www.greentechinnovations.com/logo.jpg", "Sustainable Technologies", "2015-07-28", ""),
  (8,"VirtualSpace Creations", "Creating immersive virtual reality experiences for gaming and professional training.", "Los Angeles, CA", "www.virtualspace.com", "www.virtualspace.com/logo.jpg", "Virtual Reality", "2014-11-11", ""),
  (9, "NetGuard Solutions", "Providing cutting-edge cybersecurity measures to enterprises globally.", "New York, NY", "www.netguard.com", "www.netguard.com/logo.jpg", "Cybersecurity", "2013-04-15", ""),
  (10, "CloudCrest", "Enabling businesses with scalable and robust cloud infrastructure.", "Chicago, IL", "www.cloudcrest.io", "www.cloudcrest.io/logo.jpg", "Cloud Services", "2010-12-05", "")
;

INSERT INTO user
  (id, first_name, last_name, email, password_hash, role, profile_picture, bio)
VALUES
  (1, 'John', 'Doe', 'john.doe@example.com', '[hashed_password]', 'Alumnus', 'www.example.com/johndoe.png', 'Software Engineer with 5 years of experience.'),
  (2, 'Jane', 'Smith', 'jane.smith@example.com', '[hashed_password]', 'Intern', 'www.example.com/janesmith.png', 'Final year computer science student.'),
  (3, 'Alice', 'Wright', 'alice.wright@example.com', '[hashed_password]', 'Alumnus', 'www.example.com/alicewright.jpg', 'Data Scientist with expertise in predictive modeling.'),
  (4, 'Lucas', 'Martinez', 'lucas.martinez@example.com', '[hashed_password]', 'Admin', 'www.example.com/lucasmartinez.jpg', 'Database Administrator with 8 years in the tech industry.'),
  (5, 'Olivia', 'Taylor', 'olivia.taylor@example.com', '[hashed_password]', 'Intern', 'www.example.com/oliviataylor.jpg', 'Computer Engineering student with a passion for IoT.'),
  (6, 'Ethan', 'Nguyen', 'ethan.nguyen@example.com', '[hashed_password]', 'Intern', 'www.example.com/ethannguyen.jpg', 'Final year student specializing in cybersecurity.'),
  (7, 'Ava', 'Robinson', 'ava.robinson@example.com', '[hashed_password]', 'Alumnus', 'www.example.com/avarobinson.jpg', 'UX/UI Designer with a flair for minimalist designs.'),
  (8, 'Logan', 'Patel', 'logan.patel@example.com', '[hashed_password]', 'Admin', 'www.example.com/loganpatel.jpg', 'Senior Developer with expertise in cloud infrastructure.'),
  (9, 'Isabella', 'Gomez', 'isabella.gomez@example.com', '[hashed_password]', 'Alumnus', 'www.example.com/isabellagomez.jpg', 'Digital Marketer with a focus on tech companies.'),
  (10, 'Liam', 'O''Brien', 'liam.obrien@example.com', '[hashed_password]', 'Alumnus', 'www.example.com/liamobrien.jpg', 'Project Manager with 6 years of experience in agile methodologies')
;

INSERT INTO story
  (id, company_id, user_id, title, content, posted, likes, status)
VALUES
  (1, 1, 1, "My journey with TechBreeze", "Working at TechBreeze was a transformative experience. Their cloud solutions are top-notch.", "2023-10-12 14:30:00", 50, "published"),
  (2, 2, 2, "Internship insights at SoftSprint", "I learned a lot during my summer internship at SoftSprint. The team is supportive and projects challenging.", "2023-09-01 09:15:00", 35, "published")
;

INSERT INTO comment
  (id, story_id, user_id, content, date_posted)
VALUES
  (1, 1, 2, "Great to hear about your experience, John! I'm considering them for my next job.", "2023-10-12 16:45:00"),
  (2, 2, 1, "SoftSprint has a great reputation. Glad you had a good experience, Jane!", "2023-09-01 12:10:00")
;

INSERT INTO tag
  (id, name)
VALUES
  (1, "Interview Process"),
  (2, "Work Environment"),
  (3, "Learning Opportunities"),
  (4, "Team Dynamics"),
  (5, "Challenges")
;

INSERT INTO story_tag
  (story_id, tag_id)
VALUES
  (1, 1),
  (1, 5),
  (2, 3),
  (2, 4)
;