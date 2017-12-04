/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const ScoreBadge = styled.div.attrs({
  className: props => props.showScoreBadge ? 'show-score-badge' : 'hide-score-badge'
})`
  position: fixed;
  top: 100%;
  left: 50%;
  width: 6em;
  height: 2.4em;
  font-size: 1em;
  line-height: 2.4em;
  text-align: center;
  //background-color: ${props => props.bankgrund};
  background-color: red;
  transform: translateX(-50%);
  border-radius: 4px;
`;

export default ScoreBadge;
