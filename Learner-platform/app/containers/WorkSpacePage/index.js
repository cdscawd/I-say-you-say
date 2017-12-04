/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import HomePage from 'containers/HomePage/Loadable'
import PromptPage from 'containers/PromptPage/Loadable'
import WordsPage from 'containers/WordsPage/Loadable'
import QuestionPage from 'containers/QuestionPage/Loadable'
import SentencePage from 'containers/SentencePage/Loadable'
import SmallTalkPage from 'containers/SmallTalkPage/Loadable'
import FreeTalkPage from 'containers/FreeTalkPage/Loadable'
import ConclusonPage from 'containers/ConclusonPage/Loadable'

import Article from 'components/Article'
import {SectionContent, P, Div} from './StyleElement'

export default class WorkSpacePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }
  
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <HomePage />
    );
  }
}