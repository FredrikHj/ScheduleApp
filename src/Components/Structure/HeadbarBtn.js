import React, { useState, useEffect } from 'react';
import { HeadbarStyle } from '../Style/MainStyle';

export let HeadbarBtn = (props) => {
    const { id, onClick, btnName } = props;
    return(
        <HeadbarStyle.btnContainer>
            <HeadbarStyle.btnSubmitContainer id={ id} onClick={ onClick }>
                <HeadbarStyle.btnHeadline id={ id } onClick={ onClick }>{ btnName }</HeadbarStyle.btnHeadline>
            </HeadbarStyle.btnSubmitContainer> 
        </HeadbarStyle.btnContainer>
    );
}