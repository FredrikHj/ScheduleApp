/* ================================================== Style Rouls for Shared rouls ==================================================
Imports module */
import styled from 'styled-components';

// ============================== Common Style ==============================
export let CommonBtnStyle = {
    btn: styled.button`
        display: flex;
        flex-direction: row;
        padding: 8px 12px;
        box-shadow: 0px 1px 2px rgba(98, 98, 98, 0.18), 0px 0px 2px rgba(98, 98, 98, 0.18);
        border-radius: 9.5px;
        background: #AE0B05;
    `,
}
export let CommonTexStyle = {
    btnHeadline: styled.p`
        right: 12px;
        margin-top: -2px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        line-height: 150%;
        display: flex;
        align-items: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        flex: none;
        order: 0;
        align-self: center;
    `,
}