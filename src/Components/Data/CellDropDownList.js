import React, { useState, useEffect } from 'react';

export let CellDropDownList = (props) => {
    useEffect(() => {

    }, [])
    console.log(props.options);
    
    return(
        <>
            <select>
                {(props.options !== false) 
                    ? props.options.map((item, index) => {
                        return(
                            <option key={ index }>{ item }</option>
                        );
                     })
                    : null
                } 
            </select>
        </>
    );
}