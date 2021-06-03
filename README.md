1. clone repository
2. run npm install
3. run command: sudo docker-compose -f docker-compose.yml up --build
4. open second terminal and run command: npm run db:start and npm run start
5. to wotk with "User" open Postman
6. to create user use link: http://localhost:3000/user and method "post" and body: 
{
    "name": "Yevhen",
    "lastName": "Svyrydov"
}
6. to update user use link: http://localhost:3000/user/id (where id is a User id, for example 1) and method "put" and body: 
{
    "name": "Bogdan",
    "lastName": "Lishchynskiy"
}
7. to get one user use link: http://localhost:3000/user/id (where id is a User id, for example 1) and method "get"
8. to delete user use link: http://localhost:3000/user/id (where id is a User id, for example 1) and method "delete"
