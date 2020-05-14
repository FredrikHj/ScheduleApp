import React, { useState, useEffect } from 'react';
import { UserInputForm, UserInputSelect } from '../Style/LogedInStyle';
import { selectContainers } from '../Style/SQLTableStyle';

export let CellInput = (props) => {
    const { dataType, cellIndex, inputOnChange, sOonClick, valueStr } = props;
    return(
        <>
            <input 
                type="text"
                style={ UserInputForm }
                data-type={ dataType } 
                data-typenr={ cellIndex }
                onChange={ inputOnChange } 
                value={ valueStr }
            />
            <UserInputSelect.container>
                <select key={ cellIndex } style={ selectContainers } onChange={ sOonClick }>
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