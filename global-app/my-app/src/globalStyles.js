import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FFF' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 17px' : '10px 20px')};
  color: #F7931E;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 3px solid #F7931E;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color:#fff;
    background-color: ${({ primary }) => (primary ? 'orange' : 'orange')};
  }

  @media screen and (max-width: 960px) {
    width: 53%;
  }
`;

export default GlobalStyle;
