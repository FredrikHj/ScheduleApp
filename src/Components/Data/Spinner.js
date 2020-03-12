import React, { useState, useEffect } from 'react';
import '../CSS/Spinner.scss';
export let Spinner = (props) => {
    return(
        <>
            { props.str } <span className="spinner spinner-dark"></span>
        </>
    );
}
export default Spinner;
