import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.header`
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  font-size: 1.2em;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const HeaderLink =  styled(Link)`
  margin-left: 4px;
  display: inline-flex;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 12px;
  color: #41ADDD;
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;


export {
  Head, 
  HeaderLink,
}; 