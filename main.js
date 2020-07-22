

import {ToyReact, Component} from './ToyReact.js'

// class MyComponent extends Component {
//   render() {
//     return (<div>
//       <span>Hello</span>
//       <span>World!</span>
//       <div>
//         {this.children}
//       </div>
//     </div>)
//   }
  
// }

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    console.log('this.props', this.props)
    return (
      <button className="square" onClick={() => {console.log('click'); this.setState({value: 'X'})}}>
        {/* 第一天作业不支持数字，速去排查 */}
        {this.state.value || ''}
        {/* {this.props.value} */}
      </button>

    )
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


let a = <Board />

// let a = <MyComponent name = 'a' id="ida">
//   <div>123</div>
// </MyComponent>

ToyReact.render(
  a,
  document.body
)

// let a = <div name='a' id="idea">
//   <span>Hello</span>
//   <span>World</span>
//   <span>!</span>
// </div>

// document.body.appendChild(a)
