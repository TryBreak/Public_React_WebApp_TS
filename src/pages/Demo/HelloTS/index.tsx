import React, { Component } from 'react';
import Hello from './module/Hello';
class Home extends Component {
  render() {
    return (
      <div style={{ border: '10px solid red' }}>
        <Hello framework="React" compiler="hello" />
      </div>
    );
  }
}

export default Home;
