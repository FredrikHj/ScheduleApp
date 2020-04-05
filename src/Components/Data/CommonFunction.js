import { updateLocalstorage, updateGotoPage } from '../Storage.js';

export let runLogOut = (e) => {
    // Gets the element
    let targetBtnId = e.target.id;     
    console.log("runLogOut -> targetBtnId", targetBtnId)
    updateGotoPage(targetBtnId);

    updateLocalstorage(window.localStorage.clear());
    //axiosPost('', targetBtnId, '');
}
export let runAddRecord = (e) => {
    // Gets the element
    let targetBtnId = e.target.id;     
    
    updateGotoPage(targetBtnId);
}