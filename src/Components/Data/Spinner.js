import React, { useState, useEffect } from 'react';
import '../CSS/Spinner.scss';
export let Spinner = (props) => {
    return(
        <>
           { props.wait } <div class="spinner spinner-dark"></div>
        </>
    );

}
export default Spinner;