// ================================================== Function´s for RunSQLData ==================================================
// Import inportant components for the specific page
import { getLocalStorageData } from './LocalStorage';
import { axiosPost, axiosGet } from './Axios';


export const runAddRow = (btnId, addedSQLData) => {
    console.log("runAddRow -> addedSQLData", addedSQLData)
    console.log("runAddRow -> btnId", btnId)
    axiosPost(btnId, addedSQLData);
    setTimeout(() => {
        axiosGet('userSpec', getLocalStorageData('token'));
    }, 400);
}
