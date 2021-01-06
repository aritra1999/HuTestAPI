
#  HuTestAPI



##  Validation
| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| GET | `/api/validate/?email=<email>` | Validates new users | https://hutestapi.herokuapp.com/api/api/validate?email=test00@softwaysolutions.com |  

  

##  Users
| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| GET | `api/get/users` | Returns list of all users.| https://hutestapi.herokuapp.com/api/get/users |  
| GET | `api/get/user/:id` | Returns user with ID.  | https://hutestapi.herokuapp.com/api/get/user/5ff3e60e3068d945caf48c80 |  
| POST | `api/post/user` | Create new user. | https://hutestapi.herokuapp.com/api/post/user |  
| PUT | `api/update/user/:id` | Update user with ID. | https://hutestapi.herokuapp.com/api/update/user/5ff3e60e3068d945caf48c80 |  
| DELETE | `api/delete/user/:id` | Delete user with ID. | https://hutestapi.herokuapp.com/api/delete/user/5ff3e60e3068d945caf48c80 | 
  

##  Orgnizations

| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| GET | `api/get/orgs` | Returns list of all organizations.| https://hutestapi.herokuapp.com/api/get/orgs |  
