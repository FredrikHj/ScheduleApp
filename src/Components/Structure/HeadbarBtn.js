import React, { useState, useEffect } from 'react';
import { HeadbarStyle } from '../Style/MainStyle';

export let HeadbarBtn = (props) => {
    const { id, onClickFunction, btnName } = props;
    return(
        <HeadbarStyle.btnContainer>
            <HeadbarStyle.btnSubmitContainer id={ id} onClick={ onClickFunction }>
                <HeadbarStyle.btnHeadline id={ id } onClick={ onClickFunction }>{ btnName }</HeadbarStyle.btnHeadline>
            </HeadbarStyle.btnSubmitContainer> 
        </HeadbarStyle.btnContainer>
    );
}