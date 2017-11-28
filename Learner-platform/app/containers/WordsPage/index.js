/*
 * WordsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Article from 'components/Article';
import {Section, SectionContent, Ul, Li, Image, P} from './StyleElement';

export class WordsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

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

WordsPage.propTypes = {
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

)(WordsPage);
