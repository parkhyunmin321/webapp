import { Component } from 'react'

class Welcome extends Component {
  render() {

    const {text} = this.props;

    return (
        
        <div>
            <h1>{text}</h1>
        </div>

    )
  }
}

export default Welcome;
