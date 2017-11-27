/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'
import PromptPage from 'containers/PromptPage/Loadable'
import WordPage from 'containers/WordPage/Loadable'
import QuestionPage from 'containers/QuestionPage/Loadable'
import SentencePage from 'containers/SentencePage/Loadable'
import SmallTalkPage from 'containers/SmallTalkPage/Loadable'
import FreeTalkPage from 'containers/FreeTalkPage/Loadable'
import ConclusonPage from 'containers/ConclusonPage/Loadable'

import FeaturePage from 'containers/FeaturePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Header from 'components/Header'
import Footer from 'components/Footer'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={ConclusonPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
