/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import messages from './messages'
import Article from 'components/Article'
import {SectionContent, P, Div} from './StyleElement'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props
    const reposListProps = {
      loading,
      error,
      repos,
    }
    console.log(this.props)
    return (
      <Article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content=" " />
        </Helmet>
        <SectionContent>
          <Div>
            <P>
              <FormattedMessage {...messages.startProjectHeaderEnglish} />
            </P>
            <P>
              <FormattedMessage {...messages.startProjectMessageChinese} />
            </P>
          </Div>
        </SectionContent>
      </Article>
    )
    
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
}
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
)(HomePage)
