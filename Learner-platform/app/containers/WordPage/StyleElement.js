import styled from 'styled-components';
import NormalImg from 'components/Img';

const Header = styled.header`
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

const Section = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px 10px;
`;

const SectionContent = styled.section`
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 40px;
  overflow: scroll;
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

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  font-size: 1.2em;
  background-color: red;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
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
