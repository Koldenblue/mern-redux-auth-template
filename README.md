# MERN and Redux User Authentication Template

![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#installation">Installation</a>
3. <a href="#usage">Usage</a>
4. <a href="#contributions">Contributions</a>
5. <a href="#license">License</a>
6. <a href="#questions">Issues and Questions</a>
<hr><h3 id='description'>Description</h3>
<p>A quick demonstration may be viewed at the <a href='https://mern-redux-auth-template.herokuapp.com/'>deployed website</a>.</p>
This project provides a template for user authentication and serialization, using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The Redux library for React plays an important role in allowing individual React components to retrieve user-related data. User login information is stored in a Mongo non-relational database. The mongoose npm package is used to manage MongoDB queries. Bcrypt is used to encrypt passwords. Express.js and the passport npm package are used for back-end routing, user serialization, and authentication middleware. The axios npm package is used for communication from front-end components to the back-end database. The dotenv package may be used to store locally-scoped variables, such as api keys or authentication bypass for a dev environment. React and react router packages are used for front-end routing. Redux and the morgan logger package also provide useful debugging functionality. Finally, minimal basic styling is provided through Bootstrap. 

![image](https://user-images.githubusercontent.com/64618290/98846319-c3002300-2403-11eb-8067-b3b7206bbc2a.png)

<h3 id='installation'>Installation</h3>
Be sure that Node.js is installed. After cloning, navigate to the cloned folder in a terminal. Type 'npm start' to start the server locally. Navigate to 'localhost:3000' in a web browser to view the page.

<h3 id='usage'>Usage</h3>
<p>If using this template, kindly provide credit by linking to this GitHub repository. This program provides a template for setting up authentication routes with the MERN stack and Redux. Start out with this template in order to have login, logout, and signup functionality and routing already set up. Starting with the template, front-end and back-end functionality may be programmed as desired. </p>

<p>First, a short explanation of the React front end. Any data associated with a particular user may be retrieved by a particular component by using the useSelector Redux hook. An example of this may be found in Home.js. User state may be updated through the useDispatch Redux hook. In Home.js, the component is conditionally rendered differently, depending on whether a user is logged in or not. Finally, every time the app is reloaded, the Redux store is reset to its initial state. Therefore, the useEffect hook is used in the App.js component to retrieve the state upon page load and routing. </p>

<p>Second, concerning the database, a simple User Schema has been put in place. Usernames and passwords are stored, in BSON format, in the Mongo database. Functionality has been added to encrypt passwords in the database. When attempting to login, the passport npm package is used to validate the username and password. Although there are no protected routes in this particular website, the isAuthenticated.js middleware may be used to protect routes. This may be done by adding the middleware to protected routes - if the user is not logged in, the middleware will redirect the user to the '/' route. The authentication middleware may also be bypassed for a dev environment - to do this, first uncomment the relevantly labeled code in isAuthenticated.js. Second, rename '.env-rename' to '.env' (named such because ".env" is ignored in .gitignore). Third, change the 'BYPASS_AUTHENTICATION' variable in .env to yes. This will allow the isAuthenticated middleware to be bypassed. </p>

<p>Next, a basic seeder file is included, and may be run by using the command 'node seeders/seed.js'. This will delete the current Mongo database, and place a user in the database with the username '1' and password '1'. The Mongo database is named "DBNAME" by default. This may be changed by editing the server.js file. The seed.js file will also have to be edited. </p>

<p>Lastly, in the package.json file, project names will of course have to be changed. The cross-env, jsonwebtoken, node-sass, and passport-jwt packages are included, but are not currently being used in this program.</p>

<h3 id='contributions'>Contributions</h3>
Make a suggestion in the 'issues' tab or contact me through GitHub or email.

<h3 id='license'>License</h3>
This project is licensed under the MIT License.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions may be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>
