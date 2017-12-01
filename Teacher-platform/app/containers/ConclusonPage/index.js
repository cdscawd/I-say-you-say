/*
 * ConclusonPage 
 *
 * 评分
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Article from 'components/Article';
import { SectionContent, H1, Image, P, Div, Span, EvaluateBox, Title, Star } from './StyleElement';
import Starpath from 'images/star.png';

export default class ConclusonPage extends React.Component{ // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }

  render() {

    return (
      <Article>
        <Helmet>
          <title>Concluson Page</title>
          <meta name="description" content=" " />
        </Helmet>
        {/*<SectionContent>
          <H1>Concluson</H1>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde beatae suscipit atque culpa, aspernatur minima ea reprehenderit similique quod. 
          </P>
        </SectionContent>*/}
        <SectionContent>
          <H1>3.8</H1>
          <ul>
            <li><Title>Word: </Title> <Star src={Starpath} /><Star src={Starpath} /></li>
            <li><Title>Question: </Title><Star src={Starpath} /><Star src={Starpath} /><Star src={Starpath} /><Star src={Starpath} /><Star src={Starpath} /></li>
            <li><Title>Sentence: </Title><Star src={Starpath} /><Star src={Starpath} /></li>
            <li><Title>SmallTalk: </Title><Star src={Starpath} /><Star src={Starpath} /></li>
            <li><Title>FreeTalk: </Title><Star src={Starpath} /></li>
          </ul>
          <EvaluateBox>不错， 注意单词发音标准，敢于开口练习。</EvaluateBox>
        </SectionContent>
      </Article>
    );
  }
}