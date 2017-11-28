import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Head, HeaderLink } from './StyleElement';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Head> 
        <HeaderLink to="/">/</HeaderLink>
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
