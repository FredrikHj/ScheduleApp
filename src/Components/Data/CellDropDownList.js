import React, { useState, useEffect } from 'react';

export let CellDropDownList = (props) => {
    useEffect(() => {

    }, [])
    return(
        <>
            <select>
               {
                    props.options.map((item, index) => {
                        return(
                            <option key={ index }>{ item }</option>
                        );
                    })
                }
                <option></option>
            </select>
        </>
    );
}