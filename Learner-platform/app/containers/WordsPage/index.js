/*
 * WordsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Article from 'components/Article';
import {Section, SectionContent, Ul, Li, Image, P} from './StyleElement';

export default class WordsPage extends React.Component{ // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }

  render() {

    return (
      <Article>
        <Helmet>
          <title>Word Page</title>
          <meta name="description" content=" " />
        </Helmet>
        <SectionContent>
          <Ul>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
            <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
            <P>Jump</P>
          </Li>
          <Li>
            <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
            <P>Jump</P>
          </Li>
          </Ul>
        </SectionContent>
      </Article>
    );
  }
}
