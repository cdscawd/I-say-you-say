import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Foot, } from './StyleElement';

import ScoreBadge from 'components/ScoreBadge';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function Footer() {
  return (
    <Foot>
      <ScoreBadge>优秀</ScoreBadge>
    </Foot>
  );
}

export default Footer;
