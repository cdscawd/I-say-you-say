/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import PromptPage from 'containers/PromptPage/Loadable'
import messages from './messages'
import Article from 'components/Article'
import {SectionContent, P, Div} from './StyleElement'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content=" " />
        </Helmet>
        <SectionContent>
          <Div>
            <P>
              <FormattedMessage {...messages.startProjectHeaderEnglish} />
            </P>
            <P>
              <FormattedMessage {...messages.startProjectMessageChinese} />
            </P>
          </Div>
        </SectionContent>
      </Article>
    );
  }
}

export default (HomePage);