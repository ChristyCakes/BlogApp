# Rainy Day Blog

### A React Router app for reading and writing blogs.

#### See a video demo [here](https://www.youtube.com/watch?v=l1Rs5hOCpSk)

#### Visit the live site [here](http://54.215.230.88:3000/) 

The app is built with:
* React Router
* Bootstrap and CSS
* PassportJS
* ExpressJS
* MySQL





More Details
* Stored procedures in the database allow jumping from table to table. For example, click on an author's name from the 'Authors' page to see list of that author's blogs.
* New users create a space for themselves in the database by submitting name, email, and password on the 'Registration' page.
* The many-to-many MySQL database hashes and salts users' passwords. 
* Once created in the database, users are authenticated at login with matching email and password using auth tokens.
* Persistent login allows users to jump from page to page then back to 'My Blogs' admin page while logged in.
* Users send CRUD requests for individual posts from the admin page.
* The back end routes are protected with routers and the front end with PrivateRoute.
* The blog is deployed using AWS EC2, S3, and RDS.