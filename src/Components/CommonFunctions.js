let jwt = require('jsonwebtoken');

export let getTokenData = (token, inlogData) => {
    console.log("getTokenData -> token", token)
    let tokenData = jwt.verify( token, 'inlogSecretKey', (error, token) => token);
    if (inlogData === 'fullName') return tokenData.loginName;
}
