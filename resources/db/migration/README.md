# Notes

- Companies table stores essential details about the IT companies.

- Users table manages individual profiles of interns, alumni, and even administrators.

- Stories is where experiences from users related to a company are stored. The status can be used to ensure quality control, where stories can be reviewed before publishing.

- Comments can be added to stories, allowing users to discuss, ask questions, or provide additional insights.

- Tags can be used to categorize stories (e.g., "Interview Process", "Work Environment", "Learning Opportunities").

- The Story_Tags bridge table establishes the many-to-many relationship between stories and tags, as a story can have multiple tags and a tag can be associated with multiple stories.

# How to get the database up and running

1. Install and configure MySQL to your local machine (MySQL Community Server)
2. cd to 'resrouces/db/migration/'
3. Run command: 
    To migrate the DB:  mysql -u root -p < migrate.sql
    To nuke the DB:  mysql -u root -p < nuke.sql