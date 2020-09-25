// ================================================== HeadBarStyle ==================================================
import styled from 'styled-components';

// ============================== Generall ==============================
const headerWidth = 1400;
const headContainerCenterPoss = headerWidth/2;
export const logaImage = {
    width: '210px',
    marginTop: '40px',
    marginBottom: '0',
}

export let HeadbarStyle = {
  header: styled.section`
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

// ============================== LoginForm ==============================

export let LoginFormStyle = {
    headContainer: styled.section`
      width: 400px;
      display: flex;
      flex-direction: row;
      margin-left: -54px;
      margin-top: -8px;
    `,
    formContainer: styled.section`
      width: 600px;
      display: flex;
      flex-direction: row;
      margin-left: 70px;
      padding-top: 23px;
    `,
    usernameContainer: styled.section`
      position: relative;
    `,
    passwordContainer: styled.section`
      position: relative;
      margin-left: 8px;
    `,
    labelFormNoFocus: styled.label`
      position: absolute;
      height: 50px;
      margin-left: 10px;
      margin-bottom: -25px;
      font-family: Roboto;
      font-style: 500;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.005em;
      color: #000000;
      background-color: none;
      
    `,
    inputForm: styled.input`
      width: 232px;
      height: 29px;
      margin-left: 0px;
      margin-top: -32px;
      background: none; /*   background: #F5F5F5; */
      border: 1px solid #E5E5E5;
      box-sizing: border-box;
      border-radius: 4px;
    `,  
    btnLoginContainer: styled.section`
      width: 181px;
      height: 80%;
      margin-left: 8px;
      margin-top: 2px;
    `,
    userInfoContainer: styled.section`
      width: 377px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    userErrorMess: styled.p`
      margin-top: 14px;
      margin-left: 18px;
      width: 149px;
      font-size: 13.5px;
      color: #AE0B05;
      font-weight: bold;
    `,
  }
console.log("LoginFormStyle", LoginFormStyle)
console.log("LoginFormStyle", LoginFormStyle)
  
  // ============================== LogedIn Mess ==============================
export let LogedInStyle = {
    headContainer:styled.section`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 52%;
      margin-left: 41.5%;
      height: 0;
      padding-top: 40px;
    `,
    userHelp: styled.section`
      margin-left: -50px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
    `,
    inlogedUser: styled.section`
      width: 300px;
      margin-left: 30px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
    `,
  }