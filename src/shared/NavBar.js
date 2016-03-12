import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handleTabsChange(value) {
    this.context.router.push(value);
  }
  render() {
    let styles = {
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
      },
    };
    return (
      <div className="app-header">
        <Tabs tabItemContainerStyle={{ backgroundColor: 'transparent' }}
              style={styles.tabs} inkBarStyle={styles.inkBar}
              onChange={this._handleTabsChange.bind(this)}>
          <Tab style={styles.tab} value="/home" label="Home" />
          <Tab style={styles.tab} value="/account" label="Account" />
          <Tab style={styles.tab} value="/about" label="About" />
        </Tabs>
      </div>
    );
  }
}

NavBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NavBar;