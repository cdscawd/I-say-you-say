/*
 * 提示页面
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Article from 'components/Article';
import {Section, P, Div, Ul} from './StyleElement';

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
            <P>(练习提示页面公用提示Page) Words</P>
            <P>Now, you will see six words, please ask the student to read them.</P>
            <Ul>
              <li>1.sadsa</li>
              <li>2.sadsa</li>
              <li>3.sadsa</li>
            </Ul>
          </Div>
        </Section>
      </Article>
    );
  }
}
