#### Configuration
  * clone this repository
  * cd into the auth-server folder
  * run 'npm i'
  * cd into the web-server folder
  * run 'npm i'
  * in a separate terminal instance, run mongo, and type the command 'use auth'
  * run 'npm watch'
  * Set the following env variables:
    * `PORT=3000 MONGODB_URI=mongodb://localhost:27017/auth APP_SECRET=dlsfjvbnaljdfv`
  * Navigate back into the web-server folder, then into the public folder, and run 'live-server'


## Server Endpoints
* POST `/signup`
* GET `/signin`
* POST `/pets`
* GET `/pets`
* DELETE `/pets/:id`
* GET  `/giveMeTheMoney`

## Login Flow
* Type in a username & password
* Copy/paste the token given back into the Chrome Extension 'ModHeader' as a bearer token
* Navigate to the path http://localhost:3000/giveMeTheMoney
* Use Postman with the same bearer token to hit the pets routes to save pet models