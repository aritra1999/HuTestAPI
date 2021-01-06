
#  HuTestAPI



##  Validation
| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| GET | `/api/validate/?email=<email>` | Validates new users | https://hutestapi.herokuapp.com/api/validate?email=test00@softwaysolutions.com |  

  

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
| GET | `api/get/org/:id` | Returns organization with ID.  | https://hutestapi.herokuapp.com/api/get/org/5ff52de529d727ae2fb7e424 |  
| POST | `api/post/org` | Create new organization. | https://hutestapi.herokuapp.com/api/post/org |  
| PUT | `api/update/org/:id` | Update organization with ID. | https://hutestapi.herokuapp.com/api/update/org/5ff52de529d727ae2fb7e424 |  
| DELETE | `api/delete/org/:id` | Delete organization with ID. | https://hutestapi.herokuapp.com/api/delete/org/5ff52de529d727ae2fb7e424 | 
  
