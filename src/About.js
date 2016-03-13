import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import AvatarURL from './assets/photo.png';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <div className="story">
            <h3>About Me</h3>
            <div className="desc">
              Potential Full Stack Web Developer, Potential Mobile Application Developer
            </div>
            <a href="https://github.com/xszhangfred">
              <RaisedButton label="Download Resume" primary={true} labelStyle={{fontSize: '16px'}}/>
            </a>
          </div>
          <div className="paper">
            <img src={AvatarURL} />
          </div>
          <div className="info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <span>Name：</span> Xuesong Zhang
              </li>
              <li>
                <span>Email：</span> xszhang.fred@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;