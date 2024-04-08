import React from "react";
import './logo.css';

class Logo extends React.Component {
  render() {
    const { center } = this.props;
    console.log('checking: ', center);
    return (
      <p className={`logo ${center ? 'center' : ''}`}>
        <b>netflix</b>roulette
      </p>
    );
  }
}

export default Logo;
