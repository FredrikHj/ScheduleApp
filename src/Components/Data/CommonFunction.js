// ================================================== Shared functions ==================================================
// Import inportant components for the specific page
import { updateLocalstorage, updateGotoPage } from '../Storage.js';

export let runLogOut = (e) => {
    // Gets the element
    let targetBtnId = e.target.id;     
    updateGotoPage(targetBtnId);

    updateLocalstorage(window.localStorage.clear());
}
export let runAddRecord = (e) => {
    // Gets the element
    let targetBtnId = e.target.id;     
    updateGotoPage(targetBtnId);
}
export let runReturnFromAddRecord = (e) => {
    // Gets the element
    let targetBtnId = e.target.id;     
    updateGotoPage(targetBtnId);
}
