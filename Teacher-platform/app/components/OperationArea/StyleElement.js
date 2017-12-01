import styled from 'styled-components';

const OperationArea = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  line-height: 70px;
  color: #fff;
  font-size: 1.2em;
  background-color: #b3b3b3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

const NextButton = styled.button.attrs({
  className: 'button button-large button-plain button-border button-circle',
})`
  
`;



export {
  OperationArea,
  NextButton,

}; 