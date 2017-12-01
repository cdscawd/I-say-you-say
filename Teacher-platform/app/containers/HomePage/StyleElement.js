/**
 * 
 */

import styled from 'styled-components';

const Section = styled.section`
  
`;

const SectionContent = styled.section`

`;

const Div = styled.div`
  padding: 10px 10px;
`;

const P = styled.p`
  width: 100%;
  color: #000;
  font-size: 1.2em;
  text-align: left;
`;

const Button = styled.button.attrs({
  className: 'button button-caution button-rounded button-giant',
})`
  margin: 0 auto;
`;

export {
  Section,
  SectionContent,
  Div,
  P,
  Button,
}; 
