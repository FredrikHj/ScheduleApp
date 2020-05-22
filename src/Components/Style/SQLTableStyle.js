/* ================================================== Style Rouls for SQLTable ==================================================
Imports module */
import styled from 'styled-components';

// ============================== SQLTable ==============================
export let SQLTableStyle = {
    container: styled.section`
        width: 100%;
        display: flex;
        flex-direction: row;
    `,
    col1_3: styled.section`
        width: 10%;
        height:500px;
    `,
    col2: styled.section`
        width: 80%;
    `,
    searchBar: styled.section`
        margin-left: calc(50% - 470px);
        margin-top: 81px;
        width: 862px;
    `,
    // Table  content ----------------------
    body__contents: styled.section`
        width: 920px;
        margin-left: calc(50% - 450px);
        display: flex;
        flex-direction: row;
    `,
    sideTool: styled.section`
        margin-left: 10px;
        margin-top: 32px;
    `,
    sideToolRow1:styled.section`
        margin-top: 0;
    `,
    sideToolRow2: styled.section`
        margin-top: 30px;
    `  ,
}
// ============================== Add Data ==============================
export let AddSQLDataStyle = {
    addDate: styled.section`
        font-size: 12px;
        text-align: center;
        color: red;
        font-weight: bold;
    `,
}
export const selectContainers = {
    width: '100%',
}