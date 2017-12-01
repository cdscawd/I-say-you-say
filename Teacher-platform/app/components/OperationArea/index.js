import React from 'react';
import { FormattedMessage } from 'react-intl';

import { OperationArea, NextButton} from './StyleElement';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function OperationAreaBlock() {
  return (
    <OperationArea>

      <NextButton>Next</NextButton>
    </OperationArea>
  );
}

export default OperationAreaBlock;
