import React, { useState, useEffect } from 'react';
import { LogedInStyle } from '../Style/LogedInStyle';
import { specificStyleLogout } from '../Style/SpecificStyle';
import Spinner from '../Data/Spinner';
import { SubmitBtn } from '../Data/SubmitBtn';

export let LogedInStatus = (props) => {
    const { inlogedUser, functionLogOut } = props;
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
                    style={ specificStyleLogout }
                    name={ 'Logga Ut' }
                    onClickFunction={ functionLogOut }
                    id={ '/' }
                    btnOptional={ '' }
                /> 
        </LogedInStyle.headContainer>
    );
}