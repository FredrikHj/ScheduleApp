import React, { useState, useEffect } from 'react';
import { UserInputForm, UserInputSelect } from '../Style/LogedInStyle'
export let CellInput = (props) => {
    useEffect(() => {

    }, [])
    console.log(props.options);
const { dataType, cellIndex, inputOnChange, sOOnClick, cellStr, placeholder } = props;
    return(
        <>
            <input 
                type="text"
                style={ UserInputForm.UserInputForm }
                data-type={ dataType } 
                data-typenr={ cellIndex }
                onChange={ inputOnChange } 
                placeholder={ placeholder }
            />
            <UserInputSelect.container>
                <select key={ cellIndex } onChange={ sOOnClick }>
                    <option>Välj</option>
                    {(props.options !== false) 
                        ? props.options.map((item, optionIndex) => {
                            return(
                                <option key={ optionIndex } id={ optionIndex } value={ item }>{ item }</option>
                            );
                        })
                        : null
                    } 
                </select>
            </UserInputSelect.container>
        </>
    );
}