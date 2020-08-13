import React from 'react';
import { NavLink } from 'react-router-dom';
import './calculate.css'
import '../clock/timer.css'

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    }
  }

  handleButton = (event) => {
    this.setState({
      result: this.state.result + event.target.value
    })
  }

  handleClear = () => {
    this.setState({
      result: ''
    })
  }

  handleEqual = () => {
    const { result } = this.state;
    this.setState({
      result: eval(result)
    })
  }
  render() {
    return (
      <div className="calculate">
        <h1>在线计算器</h1>
        <div className="calculator">
          <form action="#" className="form">
            <div className="result">
              <input type="text" name="disp" id="disp" value={this.state.result}></input>
            </div>
            <div className="buttons">
              <div className="row">
                <input id="oper" type="button" value="+" name="add" onClick={this.handleButton}></input>
                <input id="oper" type="button" value="-" name="reduce" onClick={this.handleButton}></input>
                <input id="oper" type="button" value="*" name="multi" onClick={this.handleButton}></input>
              </div>
              <div className="row">
                <input type="button" value="7" name="v7" onClick={this.handleButton}></input>
                <input type="button" value="8" name="v8" onClick={this.handleButton}></input>
                <input type="button" value="9" name="v9" onClick={this.handleButton}></input>
              </div>
              <div className="row">
                <input type="button" value="4" name="v4" onClick={this.handleButton}></input>
                <input type="button" value="5" name="v5" onClick={this.handleButton}></input>
                <input type="button" value="6" name="v6" onClick={this.handleButton}></input>
              </div>
              <div className="row">
                <input type="button" value="1" name="v1" onClick={this.handleButton}></input>
                <input type="button" value="2" name="v2" onClick={this.handleButton}></input>
                <input type="button" value="3" name="v3" onClick={this.handleButton}></input>
              </div>
              <div className="row">
                <input type="button" value="0" name="v0" onClick={this.handleButton}></input>
                <input id="clear" type="button" value="clear" name="clear" onClick={this.handleClear}></input>
                <input id="vequal" type="button" value="=" name="vequal" onClick={this.handleEqual}></input>
              </div>
            </div>

          </form>
        </div>

        <div className="back-home"><NavLink to='/'>返回主页</NavLink></div>
      </div>
    )
  }
}

export default Calculate;