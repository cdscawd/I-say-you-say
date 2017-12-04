/**
 * App
 * 学习者视图框架
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'


import WorkSpacePage from 'containers/WorkSpacePage/Loadable'
import FeaturePage from 'containers/FeaturePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ScoreBadge from 'components/ScoreBadge';

import {AppWrapper, } from './StyleElement';
export default class App extends React.Component {
  

  componentDidMount() {

    
  }

  render() {
    function GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }

    const learnerData = {
      sessionRequestId: GetQueryString("sessionRequestId"),
      sessionStartAt: GetQueryString("sessionStartAt"),
      sessionEndAt: GetQueryString("sessionEndAt"),
      lessonSlug: GetQueryString("lessonSlug"),
      locale: GetQueryString("locale")
    }

    return (
      <AppWrapper>
        <Helmet titleTemplate="%s - Qooco VoIP" defaultTitle="Qooco VoIP" />
        <Header />
        <Switch>
          <Route path="/v1/qoocoSessions/learner" component={WorkSpacePage} />
          
          <Route path="" component={NotFoundPage} />
        </Switch>

        <Footer>
          <ScoreBadge>优秀</ScoreBadge>
        </Footer>

      </AppWrapper>
    )
  }
}
