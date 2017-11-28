/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import messages from './messages';
import Article from 'components/Article';
import {Section, SectionContent, P, Div} from './StyleElement';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
   
  }

  render() {

    return (
      <Article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content=" " />
        </Helmet>
        <Section>
          <Div>
            <P>
              <FormattedMessage {...messages.startProjectHeaderEnglish} />
            </P>
            <P>
              <FormattedMessage {...messages.startProjectMessageChinese} />
            </P>
          </Div>
        </Section>
      </Article>
    );
    
  }
}

HomePage.propTypes = {
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
  
)(HomePage);
