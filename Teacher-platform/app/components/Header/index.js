import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Head, HeaderLink } from './StyleElement';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Head> 
        <HeaderLink to="/v1/qoocoSessions/learner?sessionRequestId=58d1b23d602a4a0001e66f33&sessionStartAt=1507073590164&sessionEndAt=1507679587594&lessonSlug=1072_2932_34582&locale=zh_CN">/</HeaderLink>
        <HeaderLink to="/prompt">prompt</HeaderLink>
        <HeaderLink to="/words">words</HeaderLink>
        <HeaderLink to="/sentence">sentence</HeaderLink>
        <HeaderLink to="/question">question</HeaderLink>
        <HeaderLink to="/smalltalk">smalltalk</HeaderLink>
        <HeaderLink to="/freetalk">freetalk</HeaderLink>
        <HeaderLink to="/concluson">concluson</HeaderLink>

      </Head>
    );
  }
}

export default Header;
