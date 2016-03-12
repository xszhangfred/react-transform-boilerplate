import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import axios from 'axios';
import isEmpty from 'lodash/fp/isEmpty';
import UserInfo from './user/UserInfo';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    axios.get(`https://api.github.com/users/${account}`)
         .then((res) => {
           this.setState({user: res.data});
           console.log(res);
         })
        .catch((res) => {
          console.log(res);
        });
  }
  render() {
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <UserInfo userInfo={this.state.user} />
      );
    }
    return (
      <div className='account'>
        <Card className="content">
          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField hintText="Your Github Account"
                       ref="account"/>
            <FlatButton label="Search Github"
                        type="submit"
                        primary={true}/>
          </form>
        </Card>
        { GitHubInfo }
      </div>
    );
  }
}

export default Account;