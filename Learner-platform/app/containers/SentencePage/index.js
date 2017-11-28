/*
 * SentencePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Article from 'components/Article';
import {SectionContent, Image, P, Div, Span} from './StyleElement';

export class SentencePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

SentencePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default compose(

)(SentencePage);
