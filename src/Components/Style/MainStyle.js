import styled from 'styled-components';

// ============================== GenerallyStyle ==============================
const commonColorBlue =  'rgb(68, 68, 223)';
export let GenerallyStyle = {
  askMarkMove: styled.section`
    float: right;
  `,
}
// ============================== Headbar ==============================
const headerWidth = 1400;
const headContainerCenterPoss = headerWidth/2;
export const logaImage = {
    width: '210px',
    marginTop: '40px',
    marginBottom: '0',
}

export let HeadbarStyle = {
  header: styled.section`
    border: px solid red;
    background-color: white;
    width: 100%;
  `,
  headContainer: styled.section`
    display: flex;
    flex-direction: row;
    width: ${headerWidth}px;
    margin-left: calc(50% - ${headContainerCenterPoss}px);
    background: #FFFFFF;
  `,
  siteLogaContainer: styled.section`
    margin-top: -23px;
    margin-left: 90px;
    width: 36%;
  `,
  appStatusContainer: styled.section`
  border: px solid red;
    width: 62%;
  `,
  headline: styled.section`
    display: flex;
    align-items: flex-end;
    width: 500px;
    height: 18px;
    margin-left: 45px;
    margin-top: -18px;
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