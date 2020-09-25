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
    // Table  contents ----------------------
    tableHeadline: styled.p`
        margin: 0;
    `,
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
        margin-top: 60px;
    `  ,
    toolContainer: styled.section`
        display: flex;
        flex-direction: row;
        width: 100px;
    `,
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

// ============================== SQLData Sort ==============================
export let SQLDataSort = {
    sortUpDnContainer: styled.span`
        display: flex;
        flex-direction: row;
        margin: -20px 0px 0px 105px;
    `,
    arrows: styled.button`
        padding: 0;
        background: none;
        border: none;
    `,
}

// ============================== SQLData Pagination =============================
export let SQLDataPagination = {
    container: styled.section`
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 30px;
        margin-left: calc(50% - 100px)
    `,
    arrowDubbleLeft: styled.span`
       transform: rotate(180deg); 
    `,
    arrowGroupLeft: styled.section`
        
    `,
    arrowLeft: styled.span`
    `,
    
    inputNrGroupMiddle: styled.section`

    `,
    inputSide: styled.input`
        width: 40px;
    `,

    totSides: styled.span`

    `,
    arrowGroupRight: styled.section`

    `,
    arrowRight: styled.span`
    `,
    arrowDubbleLRight: styled.span`
    `,
}