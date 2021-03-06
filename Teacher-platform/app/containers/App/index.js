/**
 * App
 * 学习者视图框架
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'
import PromptPage from 'containers/PromptPage/Loadable'
import WordsPage from 'containers/WordsPage/Loadable'
import QuestionPage from 'containers/QuestionPage/Loadable'
import SentencePage from 'containers/SentencePage/Loadable'
import SmallTalkPage from 'containers/SmallTalkPage/Loadable'
import FreeTalkPage from 'containers/FreeTalkPage/Loadable'
import ConclusonPage from 'containers/ConclusonPage/Loadable'

import FeaturePage from 'containers/FeaturePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import Header from 'components/Header'
import OperationArea from 'components/OperationArea'

import {AppWrapper, } from './StyleElement';

export default function App() {
  
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Qooco VoIP" defaultTitle="Qooco VoIP" />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/prompt" component={PromptPage} />
        <Route path="/words" component={WordsPage} />
        <Route path="/sentence" component={SentencePage} />
        <Route path="/question" component={QuestionPage} />
        <Route path="/smalltalk" component={SmallTalkPage} />
        <Route path="/freetalk" component={FreeTalkPage} />
        <Route path="/concluson" component={ConclusonPage} />

        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <OperationArea/>
    </AppWrapper>
  );
}
