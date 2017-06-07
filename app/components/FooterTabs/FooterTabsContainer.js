import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeActiveTab } from '~/redux/modules/footerTabs';
import FooterTabs from './FooterTabs';

class FooterTabsContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired
  }
  render () {
    return (
      <FooterTabs
        activeTab={this.props.activeTab}
        dispatch={this.props.dispatch}
        changeActiveTab={changeActiveTab}/>
    );
  }
}

function mapStateToProps ({footerTabs}) {
  return {
    activeTab: footerTabs.activeTab
  }
}

export default connect(mapStateToProps)(FooterTabsContainer);
