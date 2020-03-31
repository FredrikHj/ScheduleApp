export let LocalStorageObj =  {
    logedInState: false,
    fullName: ''
};

export function getLocalStorageData(getData){
    console.log("getLocalStorageData -> window.localStorage.length", window.localStorage)
    // Run if a data i saved into the localstorage else no run
    getData = JSON.parse(window.localStorage.getItem("loginData")).token;
    console.log("getLocalStorageData -> getData", getData)
    
    return getData;
}