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
        margin-left: 267px;
        margin-top: 82px;
        width: 861px;
    `,
    // Table  content ----------------------


}
// ============================== Add Data ==============================
export let AddSQLDataStyle = {
    addDate: styled.section`
        font-size: 12px;
        text-align: center;
        color: red;
        font-weight: bold;
    `,
    btnAdd:  styled.section`
        margin-left: 900px;
        margin-top: 1px;
    `,
}