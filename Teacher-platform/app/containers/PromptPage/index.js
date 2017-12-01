/*
 * 提示页面
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Article from 'components/Article';
import {Section, P, Div} from './StyleElement';

export default class PromptPage extends React.Component{ // eslint-disable-line react/prefer-stateless-function
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
            <P>(练习提示页面公用提示Page)</P>
            <P>Now, you will see six words, please read and practice.</P>
          </Div>
        </Section>
      </Article>
    );
  }
}
