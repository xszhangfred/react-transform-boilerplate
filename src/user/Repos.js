import React, { Component } from 'react';
import map from 'lodash/fp/map';

class Repos extends Component {
  render() {
    const repoList = map((repo) => {
      return (
        <li key={repo.id}>
          <div>
            <p className='name'>name {repo.name}</p>
            <p className='lang'>{repo.language}</p>
          </div>
          <p className='desc'>{repo.description}</p>
        </li>
      );
    })(this.props.repos);
    return (
      <ul className="user-repos">
        { repoList }
      </ul>
    );
  }
}

export default Repos;