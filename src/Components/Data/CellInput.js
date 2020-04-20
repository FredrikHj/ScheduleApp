import React, { useState, useEffect } from 'react';
import { UserInputForm, UserInputSelect } from '../Style/LogedInStyle'
export let CellInput = (props) => {
    useEffect(() => {

    }, [])
    console.log(props.options);
const { dataType, dataTypen, onChange, placeholder } = props;
    return(
        <>
            <input 
                type="text"
                style={ UserInputForm.UserInputForm }
                data-type={ dataType } 
                data-typenr={ dataTypen }
                onChange={ onChange } 
                placeholder={ placeholder }
            />
            <UserInputSelect.container>
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
            </UserInputSelect.container>
        </>
    );
}