export let LocalStorageObj =  {
    logedInState: false,
    fullName: ''
};

export function getLocalStorageData(getData){

    // Run if a data i saved into the localstorage else no run
    if (window.localStorage.length !== 0 && getData === 'token') getData = JSON.parse(window.localStorage.getItem("loginData")).token;
    return getData;
}