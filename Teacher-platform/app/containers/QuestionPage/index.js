/*
 * QuestionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Article from 'components/Article';
import {SectionContent, Image, P, Div} from './StyleElement';

export default class QuestionPage extends React.Component{ // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }

  render() {

    return (
      <Article>
        <Helmet>
          <title>Question Page</title>
          <meta name="description" content=" " />
        </Helmet>
        <SectionContent>
          <Div>
            <P>Are you a good student?</P>
            <Image src="http://cn.media.qooco.com/lessonData/common/images/good_at.jpg"/>
          </Div>
        </SectionContent>
      </Article>
    );
  }
}
