/* ================================================== Spinner ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import '../Style/Spinner.scss';

// Import inportant components for the specific page
export let Spinner = (props) => {
    return(
        <>
            { props.str } <span className="spinner spinner-dark"></span>
        </>
    );
}
export default Spinner;
