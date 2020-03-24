import styled from 'styled-components';

// ============================== GenerallyStyle ==============================
const commonColorBlue =  'rgb(68, 68, 223)';
export let GenerallyStyle = {
  body__contents: styled.section`
    width: 1024px;
    margin-left: calc(50% - 512px);
  `,
  logInSpinnerMove: styled.section`
    position: relative;
    top: -40px;
    left: 300px;
  `,
  askMarkMove: styled.section`
    float: right;
    margin-top: -7px;
  `,
}
// ============================== Headbar ==============================
export let HeadbarStyle = {
  header: styled.section`
    width: 100%;
    background-color: white;
    margin: -39px 0px 0px -5px;
    `,
  headContainer: styled.section`
    width: 1400px;
    height: 103px;
    margin-left: calc(50% - 700px);
    background: #FFFFFF;
  `,
  headline: styled.section`
    width: 221px;
    height: 50px;
    margin-left: 32px;
    margin-top: 46px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 80px;
    color: #AE0B05;
  `,
  statusContainer: styled.section`
    width: 706px;
    height: 75px;
    margin-left: 770px;
    margin-top: -67px;
  `,
}