import React, { useState, useEffect } from 'react';
import '../CSS/Spinner.scss';
export let Spinner = (props) => {
    return(
        <>
           { props.wait } <div className="spinner spinner-dark moveUp"></div>
        </>
    );

}
export default Spinner;
