/* ================================================== Style Rouls for user LogedIn ==================================================
Imports module */
import styled from 'styled-components';

// ============================== Already logedIn ==============================
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
