# What is Water?
Water is an open source library to allow clients and users to generate random user data,
not limited to email, name, password, profile image and more.

Water is flexible in terms of how you want to generate and output data,
you can easily override to return an output in JSON or XML.

**Water has the ability to let create and validate custom field(s) JSON Web Tokens.**

# Documentation
## Install
```
npm install water_faker
```

## Generate random values
```
require 'water_faker'

let gender = "male" or "female"
let name = GenerateUserName(gender);
let id = GenerateUserID();
let email = GenerateUserEmail();
let password = GenerateUserPassword();
let profileImage = GenerateUserProfileImage();
```

## Generate random user
```
require 'water_faker'

//all of the fields in the options array are optional
let options = {
    gender: "female",
    custom_email_domain: null,
    email_length: 0,
    include_special_password: false,
    password_length: 0
}
let list = GenerateRandomListOfUsers(options);
console.log(list)'
```

## Generate list of random users
```
require 'water_faker'

//all of the fields in the options array are optional
let options = {
    outputType: "xml", 
    numberOfUsers: 20,
    gender: "male",
    custom_email_domain: "@company.com",
    email_length: 20,
    include_special_password: true,
    password_length: 20
}
let user = GenerateRandomUser(options);
console.log(user)'
```

# Want to contribute
If you're interested in contributing, feel free to
create an issue and a pull request for approval.

Viraj Patel(Lead): The Ohio State University

Shrutwa Soni: The Ohio State University

<a href="https://github.com/viraj325"><img src="https://avatars.githubusercontent.com/u/37918393?v=4" title="Viraj Patel(Lead)" width="60" height="60"></a>
<a href="https://github.com/Luna17072310"><img src="https://avatars.githubusercontent.com/u/100733352?v=4" title="Shrutwa Soni" width="60" height="60"></a>
