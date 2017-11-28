import styled from 'styled-components';
import NormalImg from 'components/Img';

const SectionContent = styled.section`
  
`;

const Ul = styled.ul`
  padding: 10px 0;
`;

const Li = styled.li`
  display: inline-block;
  width: 50%;
  padding: 0 5px;
`;

const Image = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
`;

const P = styled.p`
  width: 100%;
  color: #000;
  font-size: 1em;
  text-align: center;
  margin: 10px 0 14px;
`;

export {
  Header, 
  Section,
  SectionContent,
  Ul,
  Li,
  Image,
  P,
  Footer,
}; 
