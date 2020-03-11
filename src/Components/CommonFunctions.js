let jwt = require('jsonwebtoken');

export let getTokenData = (token, inlogData) => {
    let tokenData = jwt.verify( token, 'inlogSecretKey', (error, token) => token);
    console.log("getTokenData -> getToken", tokenData);
    if (inlogData === 'fullName') return tokenData.loginName;
}
