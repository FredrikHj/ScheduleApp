/* ================================================== Headbar Stgatus when user is logedIn ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import { specificStyleLogout } from '../Style/SpecificStyle';
import { LogedInStyle } from '../Style/HeadbarStyle';

// Import inportant components for the specific page
import { SubmitBtn } from '../Data/SubmitBtn';
import Spinner from '../Data/Spinner';

export let LogedIn = (props) => {
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