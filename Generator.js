const generateUser = () => {
    return {
        first: getFirstValue(),
        second: getSecondValue(),
    };
}

let emailDomainList = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@icloud.com', '@outlook.com'];
const generateEmail = (customEmailDomain, length = 0) => {
    return randomValue(length > 0 ? length : Math.floor(Math.random() * 20), '#a') +
        (customEmailDomain === null ? emailDomainList[Math.floor(Math.random() * emailDomainList.length)] : customEmailDomain);
}

const generatePassword = (includeSpecialCharacters, length = 0) => {
    return includeSpecialCharacters ? randomValue(length > 0 ? length : Math.floor(Math.random() * 20), '#aA!')
        : randomValue(length > 0 ? length : Math.floor(Math.random() * 20), '#aA!');
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