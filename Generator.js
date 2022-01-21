const generateUser = () => {

}

const generateName = () => {

}

const generateEmail = () => {

}

const generatePassword = () => {

}

const randomValue = (length, code) => {
    var mask = '';
    if (code.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (code.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (code.indexOf('#') > -1) mask += '0123456789';
    if (code.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}