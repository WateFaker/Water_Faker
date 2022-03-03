'use strict';
import { v4 as uuidv4 } from 'uuid';
import builder from "xmlbuilder";

/**
 * What this library needs to do?
 * 1) Generate Name, Profile_Image, ID, Password, Email with a Promise
 * 2) return in JSON or XML
 * 3) Create and validate JWT with custom fields input
 */
/*module.exports = async function initialize() {
    var results;
    return results;
};*/

module.exports = {
    GenerateRandomListOfUsers: GenerateRandomListOfUsers,
    GenerateRandomUser: GenerateRandomUser
};

const GenerateRandomListOfUsers = (options) => {
    return new Promise((resolve, reject) => {
        let userList = generateListOfUsers(options);
        userList != null ? resolve(userList) : reject("Unable to generate a list of users, try again.")
    });
}

const GenerateRandomUser = () => {
    return new Promise((resolve, reject) => {
        let options = {
            gender: "",
            custom_email_domain: "",
            email_length: 20,
            include_special_password: true,
            password_length: 20
        }
        let user = generateUser(options);
        user.id != null ? resolve(user) : reject("Unable to generate a user, try again.")
    });
};

const GenerateUserName = (gender) => {
    return new Promise((resolve, reject) => {
        let name = generateName(gender || "")
        name != null ? resolve(name) : reject("Unable to generate a name, try again");
    });
};

const GenerateUserPassword = () => {
    return new Promise((resolve, reject) => {
        let password = generatePassword(true, 0)
        password != null ? resolve(password) : reject("Unable to generate a password, try again");
    });
};

const GenerateUserEmail = () => {
    return new Promise((resolve, reject) => {
        let email = generateEmail(null, 0)
        email != null ? resolve(email) : reject("Unable to generate a email, try again");
    });
};

const GenerateUserID = () => {
    return new Promise((resolve, reject) => {
        let id = uuidv4()
        id != null ? resolve(id) : reject("Unable to generate a userID, try again");
    });
};

const GenerateUserProfileImage = () => { return "https://picsum.photos/200/300"; };

/**
 * variable options may consist of the following values:
 * outputType, numberOfUsers, gender, custom_email_domain, email_length, include_special_password, password_length
 * @param options
 * @returns {string|*}
 */
const generateListOfUsers = (options) => {
    let count = options.numberOfUsers || 5; //5 will be default
    var response = [];
    for(var i = 1; i <= count; i++) {
        response.push(generateUser(options));
    }

    switch (options.outputType || "json") {
        case "json":
            return JSON.stringify(response);
        case "xml":
            return exportXML(response);
        case "string":
            return response.toString();
        default:
            console.log("none are selected");
    }
}

/**
 * variable options may consist of the following values:
 * gender, custom_email_domain, email_length, include_special_password, password_length
 * @param options
 * @returns {{password: string, profile_image: string, name: string, id, email: *}}
 */
const generateUser = (options) => {
    return {
        id: uuidv4(),
        name: generateName(options.gender || null),
        email: generateEmail(options.custom_email_domain || null, options.email_length || 0),
        password: generatePassword(options.include_special_password || true, options.password_length || 0),
        profile_image: "https://picsum.photos/200/300"
    };
}

let emailDomainList = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@icloud.com', '@outlook.com'];
const generateEmail = (customEmailDomain, length = 0) => {
    return randomValue(length > 0 ? length : Math.floor(Math.random() * 20), '#a') +
        (customEmailDomain === null ? emailDomainList[Math.floor(Math.random() * emailDomainList.length)] : customEmailDomain);
}

const generatePassword = (includeSpecialCharacters = true, length = 0) => {
    return includeSpecialCharacters ? randomValue(length > 0 ? length : Math.floor(Math.random() * 20), '#aA!')
        : randomValue(length > 0 ? length : Math.floor(Math.random() * 20), '#aA');
}

const randomValue = (length, code) => {
    var result = '';
    if (length > 0) {
        var collection = '';
        if (code.contains('a')) collection += 'abcdefghijklmnopqrstuvwxyz';
        if (code.contains('A')) collection += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (code.contains('#')) collection += '0123456789';
        if (code.contains('!')) collection += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        for (let i = length; i > 0; --i) result += collection[Math.floor(Math.random() * collection.length)];
    } else result = 'null';
    return result;
}

//response must be a json
const exportXML = (response) => {
    var root = builder.create('root');
    response.forEach(element => {
        let user = root.ele('user', {'id': element.id});
        console.log(element.id);
        console.log(element.name);
        console.log(element.email);
        console.log(element.password);
        console.log(element.profile_image);
        user.ele('id', element.id)
        user.ele('name', element.name)
        user.ele('email', element.email)
        user.ele('password', element.password)
        user.ele('profile_image', element.profile_image)
    });
    return root.end({ pretty: true });
}