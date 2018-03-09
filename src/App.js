import React from 'react';
import Root from './rootNode'
import Init from './hooks/init'

console.log('Init -->', Init);



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadApp: false
    }
  }

  componentDidMount = () => {
    Init.start().then(() => {
      this.setState({
        loadApp: true
      })
    })
  }

  render() {
    const {loadApp} = this.state;
    console.log('load APp ==> ', loadApp);
    return (
      <div>
      {
        loadApp ? <Root/> :
        <div>We are loading... Will mount after 5 seconds</div>
      }
      </div>
    );
  }
}
