import { v4 as uuidv4 } from 'uuid';
import builder from "xmlbuilder";

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
    var root = builder.create('users'); //could be root as well
    for(var i = 1; i <= response.length; i++) {
        root.ele('xmlbuilder').ele('name', {'type': 'tag'}, 'value')
        /*
        var item = root.ele('data');
        item.att('x', i);
        item.att('y', i * i);
        */
    }

    response.forEach(element => {
       console.log(element.id);
       console.log(element.name);
       console.log(element.email);
       console.log(element.password);
       console.log(element.profile_image);
    });
    return root.end({ pretty: true });
}