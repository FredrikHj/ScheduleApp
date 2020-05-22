/* ================================================== Style Rouls for LoginForm ==================================================
Imports module */
import styled from 'styled-components';

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
    margin-top: -53px;
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
    margin-top: 22px;
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
      border: 1px solid red;
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
