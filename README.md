# virtual-warehouse
Challenge 13 utilizes Sequelize and Express.js to manipulate databases, maintain inventory and handle customer requests.
To begin, seed the database by executing <winpty mysql -r root -p> and entering <root> as password, then <SOURCE ./db/schema.sql>, <exit>, then execute <npm start> to start the application.
### Walkthrough Link
https://drive.google.com/file/d/1Cc9qoaFxvAMOayQSeTzlEwYDffUDQFkk/view
### GitHub URL
https://github.com/maxr-e/virtual-warehouse

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database