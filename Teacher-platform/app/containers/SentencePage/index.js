/*
 * SentencePage
 *
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Article from 'components/Article';
import {SectionContent, Image, P, Div, Span} from './StyleElement';

export default class SentencePage extends React.Component{ // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }

  render() {

    return (
      <Article>
        <Helmet>
          <title>Sentence Page</title>
          <meta name="description" content=" " />
        </Helmet>
        <SectionContent>
          <Div>
            <P>Are <Span>___</Span> a <Span>___</Span> student?</P>
            <Image src="http://cn.media.qooco.com/lessonData/common/images/good_at.jpg"/>
          </Div>
        </SectionContent>
      </Article>
    );
  }
}
