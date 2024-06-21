import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onBtnClick = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="con">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button type="button" onClick={this.onBtnClick}>
              Generate
            </button>
          </div>
          <p className="numgen">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
