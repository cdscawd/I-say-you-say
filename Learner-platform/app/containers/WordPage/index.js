/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import messages from './messages';
import {Section, Header, SectionContent, Ul, Li, Image, P, Footer} from './StyleElement';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Word Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <Section>
          <Header>
            lorem
          </Header>
          <SectionContent>
            <Ul>
              <Li>
                <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
                <P>Jump</P>
              </Li>
              <Li>
                <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
                <P>Jump</P>
              </Li>
              <Li>
                <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
                <P>Jump</P>
              </Li>
              <Li>
                <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
                <P>Jump</P>
              </Li>
              <Li>
                <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
                <P>Jump</P>
              </Li>
              <Li>
                <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
                <P>Jump</P>
              </Li>
              <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            <Li>
              <Image src="http://cn.media.qooco.com/lessonData/common/images/jumping.jpg"/>
              <P>Jump</P>
            </Li>
            </Ul>
          </SectionContent>
          <Footer>
            对话时间
          </Footer>
        </Section>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
