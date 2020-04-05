import React, { useState, useEffect } from 'react';
import { LogedInStyle } from '../Style/LogedInStyle';
import { specificBtnStyleLogout, specificBtnStyleAddRecords } from '../Style/SpecificStyleBtn';
import Spinner from '../Data/Spinner';
import { SubmitBtn } from '../Data/SubmitBtn';

export let LogedInStatus = (props) => {
    const { inlogedUser, functionLogOut, functionAdd } = props;
    return(
        <>
            <LogedInStyle.statusContainer>
                {(inlogedUser === '' ) 
                    ? <>
                            Välkommen in ... <Spinner/>
                        </>
                    : `Välkommen in ${ inlogedUser }`
                }
            </LogedInStyle.statusContainer>
            <LogedInStyle.btnSubmitLogoutInTopUp>
                <SubmitBtn
                    style={ specificBtnStyleLogout }
                    name={ 'Logga Ut' }
                    onClick={ functionLogOut }
                    id={ '/' }
                    />
            </LogedInStyle.btnSubmitLogoutInTopUp> 
        
            <SubmitBtn
                style={ specificBtnStyleAddRecords }
                name={ 'Lägga Till' }
                onClick={ functionAdd }
                id={ 'AddForm' }
                />
    {/*                         <SubmitBtn
                style={ specificBtnStyleAddRecords }
                name={ 'Återgå' }
                onClick={ runAddRecord }
                id={ 'Return' }
            /> */}
        </>
    );
}