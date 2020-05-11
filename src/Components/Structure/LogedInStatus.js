import React, { useState, useEffect } from 'react';
import { LogedInStyle } from '../Style/LogedInStyle';
import { specificBtnStyleLogout } from '../Style/SpecificStyleBtn';
import Spinner from '../Data/Spinner';
import { SubmitBtn } from '../Data/SubmitBtn';

export let LogedInStatus = (props) => {
    const { inlogedUser, functionLogOut, sumbitBtnGotTo } = props;
    return(
        <LogedInStyle.headContainer>
            <LogedInStyle.userHelp>
                Hjälp
            </LogedInStyle.userHelp>
            <LogedInStyle.inlogedUser>
                {(inlogedUser === '' ) 
                    ? <>
                            Välkommen in ... <Spinner/>
                        </>
                    : `Välkommen in ${ inlogedUser }`
                }
            </LogedInStyle.inlogedUser>

                
                <SubmitBtn
                    style={ specificBtnStyleLogout }
                    name={ 'Logga Ut' }
                    onClick={ functionLogOut }
                    id={ '/' }
                /> 

        </LogedInStyle.headContainer>
    );
}