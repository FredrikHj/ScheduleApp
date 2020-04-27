import React, { useState, useEffect } from 'react';
import { UserInputForm, UserInputSelect } from '../Style/LogedInStyle'
export let CellInput = (props) => {
    const { dataType, cellIndex, inputOnChange, sOOnClick, valueStr } = props;
    return(
        <>
            <input 
                type="text"
                style={ UserInputForm.UserInputForm }
                data-type={ dataType } 
                data-typenr={ cellIndex }
                onChange={ inputOnChange } 
                value={ valueStr }
            />
            <UserInputSelect.container>
                <select key={ cellIndex } onChange={ sOOnClick }>
                    <option>Välj</option>
                    {(props.options !== false) 
                        ? props.options.map((item, optionIndex) => {
                            return(
                                <option key={ optionIndex } data-cell={ cellIndex }id={ optionIndex } value={ item }>{ item }</option>
                            );
                        })
                        : null
                    } 
                </select>
            </UserInputSelect.container>
        </>
    );
}