# capstone-server

Host for the capstone server source code 

# Prerequisite For running node app locally

- Node.js (version v10.16.3 or above)
- npm (version 6.11.3 or above)
- MySQL (version 5 or above)


After installing these we need to install the node modules using below command 

- npm install --save

# Run Server
- node server.js
Or
- nodemon

# Categories add
You can create new projects using the postman. You need to do the post request on the below api endpoint
- http://localhost:8081/api/category/create
- body params 
- { "title": "React" }
You can change the db credentials from the file in the given below directory
- config/config.js
