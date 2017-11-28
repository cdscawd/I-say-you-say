/*
 * HomePage Messages
 *
 * 主页组建静态文本.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startProjectHeaderEnglish: {
    id: 'boilerplate.containers.HomePage.start_project.header.english',
    defaultMessage: 'Let\'s say Hi and introduce yourself.',
  },
  startProjectMessageChinese: {
    id: 'boilerplate.containers.HomePage.start_project.header.chinese',
    defaultMessage: '和老师打个招呼介绍一下自己，然后开始上课吧。',
  },

  trymeHeader: {
    id: 'boilerplate.containers.HomePage.tryme.header',
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: 'boilerplate.containers.HomePage.tryme.message',
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: 'boilerplate.containers.HomePage.tryme.atPrefix',
    defaultMessage: '@',
  },
});
