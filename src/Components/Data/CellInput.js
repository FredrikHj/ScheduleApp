/* ================================================== HeadBar ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import { UserInputForm, UserInputSelect } from '../Style/LogedInStyle';
import { selectContainers } from '../Style/SQLTableStyle';
import { AddSQLDataStyle } from'../Style/SQLTableStyle';
import { SubmitBtn } from './SubmitBtn';

export let CellInput = (props) => {
    const { dataType, cellIndex, inputOnChange, sOonClick, valueStr } = props;
    return(
        <>
            {(cellIndex === 0)
                ?   <>
                        <input 
                            type="text"
                            style={ UserInputForm }
                            data-type={ dataType } 
                            data-typenr={ cellIndex }
                            onChange={ inputOnChange }
                            value={ valueStr }
                        />
                        <AddSQLDataStyle.addDate> 20yy-mm-dd </AddSQLDataStyle.addDate>
                    </>
                : (cellIndex > 0 && cellIndex < 6) 
                    ?    <>
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
                                    {(props.options !== false) &&
                                        props.options.map((item, optionIndex) => {
                                            return(
                                                <option key={ optionIndex } data-cell={ cellIndex }id={ optionIndex } value={ item }>{ item }</option>
                                            );
                                        })
                                    }
                                </select>
                            </UserInputSelect.container>
                        </>
                    :   <SubmitBtn
                            style={ 'specificStyleAddRow' }
                            name={ 'Lägg Till' }
                            onClickFunction={ 'runAddRow' }
                            id={ 'add' }
                        />
            }
        </>
    );
}