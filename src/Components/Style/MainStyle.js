import styled from 'styled-components';

// ============================== GenerallyStyle ==============================
const commonColorBlue =  'rgb(68, 68, 223)';
export let GenerallyStyle = {
  body__contents: styled.section`
    width: 1024px;
    margin-left: calc(50% - 512px);
  `,
  askMarkMove: styled.section`
    float: right;
   /* margin-top: -7px; */
  `,
}
// ============================== Headbar ==============================
export let HeadbarStyle = {
  header: styled.section`
    background-color: white;
    /* margin: 0px 0px 0px -5px; */
    `,
  headContainer: styled.section`
    display: flex;
    flex-direction: row;
    width: 1000px;
    background: #FFFFFF;
  `,
  siteLogaContainer: styled.section`
    width: 500px;
    height: 103px;
  `,
  headline: styled.section`
    display: flex;
    align-items: flex-end;
    width: 500px;
    height: 18px;
    margin-left: 45px;
    margin-top: -3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #3D3D3D;
  `,
}
export const logaImage = {
    width: '190px',
    marginLeft: '-4px',
    marginTop: '40px',
    marginBottom: '0',
}