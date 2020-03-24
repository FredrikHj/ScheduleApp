import styled from 'styled-components';

// ============================== GenerallyStyle ==============================
export let LogedInStyle = {
  logedInUser: styled.section`
  width: 472px;
  height: 0;
  margin-left: 0;
  margin-bottom: 50px;  
  text-align: center;
  `,
  passwordContainer: styled.section`
    margin-left: 256px;
    margin-top: -69px;
    margin-bottom: -25px;
    `,
  labelFormatUsernamePassword: styled.p`
    width: 221px;
    height: 50px;
    margin-left: 10px;
    margin-bottom: -25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    `,
  inputFormatUsernamePassword: styled.input`
    width: 228px;
    height: 29px;
    margin-left: 0px;
    margin-top: 0px;
    background: #F5F5F5;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 4px;
  `,  
  btnLoginContainer: styled.section`
    width: 181px;
    height: 80%;
    margin-left: 499px;
    margin-top: -67px;
  `,
  btnSubmitContainer: styled.button`
    margin-right: 108px;
    margin-top: 29px;
    margin-left: 0;
    width: 141px;
    height: 39px;
    background: #AE0B05;
    border-radius: 4px;
  `,
  btnHeadline: styled.p`
    display: inline-block;
    position: relative;
    width: 133px;
    height: 32px;
    left: -6px;
    top: -9px;
    text-align: center;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: white;
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
  regLink: styled.p`
    margin-left: 42px;
    margin-right: 18px;
    margin-top: 13px;
    width: 150px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: black;
    font-size: 12px;
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
    margin-top: -53px;
  `,
  }