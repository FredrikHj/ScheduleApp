import styled from 'styled-components';
import { CommonBtnStyle } from './CommonStyle';

// ============================== Already logedIn ==============================
export let LogedInStyle = {
  statusContainer: styled.section`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 820px;
    margin-top: -8px;
  `,
  logedInUser: styled.section`
    border: 1px solid red;
    width: 400px;
    display: flex;
    flex-direction: row;
    margin-left: 51px;
    `,
  btnSubmitLogoutInTopUp: styled.section`
    margin-top: -10px;
  `,
}
// ============================== UserSpecificStyle ==============================
export const UserInputForm = {
  width: "100%",
}
export let UserInputSelect = {
  container: styled.section`
    margin-left: 0;
    margin-top: 0;
  `,
}