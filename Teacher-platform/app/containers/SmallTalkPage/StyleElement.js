import styled from 'styled-components';
import NormalImg from 'components/Img';

const SectionContent = styled.section`
  
`;

const Div = styled.div`

`;

const Li = styled.li`
  display: inline-block;
  width: 50%;
  padding: 0 5px;
`;

const P = styled.p`
  width: 100%;
  color: #000;
  font-size: 1.4em;
  text-align: center;
`;

const Image = styled(NormalImg)`
  width: 80%;
  margin: 0 auto 10px;
  display: block;
  border-radius: 10px;
`;

const Span = styled.span`
`;

export {
  SectionContent,
  Div,
  Image,
  P,
  Span,
}; 
