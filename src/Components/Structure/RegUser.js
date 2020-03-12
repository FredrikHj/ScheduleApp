import React, { useState, useEffect } from 'react';
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import { headName$ } from '../Storage.js';

import { axiosPost, axiosGet } from '../Data/Axios.js';
import { runAppUrls } from '../Data/runAppUrls.js';

import '../CSS/RegUser.css';

let countRegUser = 0;

export let UserReg = (props) => {
    let [ appUrl, setAppUrl ] = useState('');
    let [ appName, setAppName ] = useState(''); 
    let [ inlogedUser, updateInlogedUser ] = useState('');

    let [ userFullName, setUserFullName ] = useState('');
    let [ userName, setUserName  ] = useState('');
    let [ userPwd, setUserPWD ] = useState('');

    useEffect(() => {
        setAppUrl(runAppUrls());
        headName$.subscribe((headName) => {
            //console.log(headName);
            setAppName(headName);
        });
    }, []);
    let setStrsType = (e) => {
        //console.log('nyh');
        
        let type = e.target;
        let inputStr = type.value;            
        const {dataset} = type;
        //console.log(inputStr);
        

        if (dataset.type === 'fullName') setUserFullName(inputStr);
        if (dataset.type === 'userName') setUserName(inputStr);
        if (dataset.type === 'userPwd') setUserPWD(inputStr);
    };

     let sendUserReg = (e) => {
        let targetBtnId = e.target.id; 
        // Created a body for the added data
        let sqlBody = {
            fullName: userFullName,
            userName: userName,
            userPassWord: userPwd
        }
        //console.log(sqlBody);
        
        axiosPost('userReg', 'targetBtnId', sqlBody);
            // Save the body into the table for showing it exckluding the first item
            //sqlBody.splice(0, 1);
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${appName} - Registrera`}</title>
            </Helmet>
            <section className="logInOut__btnRegContainer">
                <div className="btnContainer__cancelReg">
                    <input type="submit" className="btnLogOut__cancelReg" value=""/>
                    <Link to={ appUrl } className="btnContainer__inputHeadline">
                        <p className="btnHeadline__cancelReg">Avbryt</p>
                    </Link>
                </div>
            </section>
            <section className="regUser__regContainer">
                <form>
                    <div>
                        <label id="userFullName">Ditt Namn</label>
                        <input type="text" id="userFullName" data-type="fullName" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <label id="userName">Användarnamn</label>
                        <input type="text" id="userName" data-type="userName" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <label id="userPwd">Lösenord</label>
                        <input type="text" id="userPwd" data-type="userPwd" onChange={ setStrsType } placeholder="  ..."/>
                    </div>
                    <div>
                        <input type="submit" className="regContainer__submitBtn" value="" onClick={ sendUserReg } id="LogIn"/>
                        <Link to={ appUrl } className="btnContainer__inputHeadline">
                            <p className="regContainer__headline" onClick={ sendUserReg } id="LogIn">Registrera</p>
                        </Link>
                    </div>
                </form>
            </section>
     
        </>  
    );
}