import React, { useState, useEffect } from 'react';
import { CommonBtnStyle, CommonTexStyle } from '../Style/CommonStyle';

export let SubmitBtn = (props) => {
    const {btnOptional, style, name, onClickFunction, id } = props;
    return(
        <>
            <CommonBtnStyle.btn  id={ id } onClick={ onClickFunction } style={ style.btn }>
                <CommonTexStyle.btnHeadline id={ id } onClick={ onClickFunction } data-optional={ btnOptional } style={ style.text }>{ name }</CommonTexStyle.btnHeadline>
            </CommonBtnStyle.btn>
        </>
    );
}