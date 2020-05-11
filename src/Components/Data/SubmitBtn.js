import React, { useState, useEffect } from 'react';
import { CommonBtnStyle, CommonTexStyle } from '../Style/CommonStyle';

export let SubmitBtn = (props) => {
    const {style, name, onClick, id } = props;
    return(
        <>
            <CommonBtnStyle.btn id={ id } onClick={ onClick } style={ style.btn }>
                <CommonTexStyle.btnHeadline id={ id } onClick={ onClick } style={ style.text }>{ name }</CommonTexStyle.btnHeadline>
            </CommonBtnStyle.btn>
        </>
    );
}