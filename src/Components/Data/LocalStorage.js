export let LocalStorageObj =  {
    logedInState: false,
    fullName: ''
};

export function getLocalStorageData(getData){
    console.log("getLocalStorageData -> window.localStorage.length", window.localStorage.length)
    // Run if a data i saved into the localstorage else no run
    if (window.localStorage.length !== 0 && getData === 'token') getData = JSON.parse(window.localStorage.getItem("loginData")).token;
    console.log("getLocalStorageData -> getData", getData)
    
    return getData;
}