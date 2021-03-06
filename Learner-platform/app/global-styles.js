import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  header, footer, ul, li{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  @keyframes showScoreAnimation {
    0%   {top: 100%;}
    50%  {top: 70%;}
    75%  {top: 70%;}
    100% {top: 100%;}
  }

  .show-score-badge{
    animation: showScoreAnimation 3s;
  }
`;
