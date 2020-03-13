let jwt = require('jsonwebtoken');

export let getTokenData = (token, inlogData) => {
    let tokenData = jwt.verify( token, 'inlogSecretKey', (error, token) => token);
    if (inlogData === 'fullName') return tokenData.loginName;
}
