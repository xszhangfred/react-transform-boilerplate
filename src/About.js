import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import AvatarURL from './assets/peter.png';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <div className="story">
            <h3>个人信息</h3>
            <div className="desc">
              web 开发者，在线教育狂热分子，很多朋友叫他“录视频的那个 Peter ”，自封“视频死磕侠” 。
            </div>
            <a href="https://github.com/happypeter">
              <RaisedButton label="下载简历" primary={true} labelStyle={{fontSize: '16px'}}/>
            </a>
          </div>
          <div className="paper">
            <img src={AvatarURL} />
          </div>
          <div className="info">
            <h3>联系方式</h3>
            <ul>
              <li>
                <span>姓名：</span> Peter Wang
              </li>
              <li>
                <span>邮箱：</span> happypeter1983@gmail.com
              </li>
              <li>
                <span>微信：</span> happypeter1983
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;