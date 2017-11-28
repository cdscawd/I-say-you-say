import styled from 'styled-components';
import NormalImg from 'components/Img';

const SectionContent = styled.section`
 
`;

const H1 = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0;
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

const EvaluateBox = styled.p.attrs({
  className: 'evaluate',
})`
  height: 2.4em;
  line-height: 2.4em;
  color: #fff;
  font-size: 1em;
  border-radius: 1.2em;
  text-align: center;
  background-color: #00bcd4;
`;

const Image = styled(NormalImg)`
  width: 80%;
  margin: 0 auto 10px;
  display: block;
  border-radius: 10px;
`;

const Span = styled.span`
`;

const Title = styled.span.attrs({
  className: 'title',
})` 
  display: inline-block;
  width: 100px;
  font-size: 1.2em;
  vertical-align: bottom;
`;

const Star = styled(NormalImg)`
  display: inline-block;
  height: 28px;
  margin-right: 4px;
`;


export {
  SectionContent,
  H1,
  Div,
  Image,
  P,
  Span,
  EvaluateBox,
  Title,
  Star
}; 
