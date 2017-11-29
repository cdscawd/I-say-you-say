/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import Article from 'components/Article'
import {SectionContent, P, Div} from './StyleElement'

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // Pusher.logToConsole = true;
    // var pusher = new Pusher('7052f955a266270bdcc7', {
    //   cluster: 'ap1',
    //   encrypted: true
    // });
    // var channel = pusher.subscribe('my-channel');
    // channel.bind('my-event', function(data) {
    //   console.log(data.message);
    // })
  }
  
  // Since state and props are static,
  // there's no need to re-render this component
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