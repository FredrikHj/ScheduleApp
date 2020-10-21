/* ================================================== HeadBar ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import { UserInputForm, UserInputSelect } from '../Style/LogedInStyle';
import { AddForm } from '../Style/AddFormStyle';
import { specificStyleAddRow, specificStyleBtnIcon } from '../Style/SpecificStyle';
import { selectContainers } from '../Style/SQLTableStyle';
import { AddSQLDataStyle } from'../Style/SQLTableStyle';

// Import inportant components for the specific page
import { SubmitBtn } from './SubmitBtn';
import { FcAddRow, FcCalendar } from "react-icons/fc";

export let AddFormCellInput = (props) => {
    const { dataType, cellIndex, inputOnChange, sOonClick, tableToolBtn, valueStr } = props;
    return(
        <>
            {(cellIndex === 0)
                ?   <>
                        <AddForm.dateInputContainer>
                          <SubmitBtn
                                style={ specificStyleAddRow }
                                name={ <FcCalendar style={ specificStyleBtnIcon }/> }
                                onClickFunction={ tableToolBtn }
                                id={ 'calender' }
                            />
                            <input 
                                type="text"
                                style={ UserInputForm.date }
                                data-type={ dataType } 
                                data-typenr={ cellIndex }
                                onChange={ inputOnChange }
                                value={ valueStr }
                            />
                        </AddForm.dateInputContainer>
                        <AddSQLDataStyle.addDate> 20yy-mm-dd </AddSQLDataStyle.addDate>
                    </>
                : (cellIndex > 0 && cellIndex < 6) 
                    ?    <>
                            <input 
                                type="text"
                                style={ UserInputForm.general }
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
                    :   
                        <AddForm.addBtn>
                            <SubmitBtn
                                style={ specificStyleAddRow }
                                name={ <FcAddRow style={ specificStyleBtnIcon }/> }
                                onClickFunction={ tableToolBtn }
                                id={ 'addRecord' }
                            />
                        </AddForm.addBtn>
            }
        </>
    );
}