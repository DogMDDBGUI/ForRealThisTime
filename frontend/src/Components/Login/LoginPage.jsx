import React from 'react';
import axios from 'axios';
import { Login, Register } from './';

export class LoginPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true,
      isLoggedout: true,
    };
    this.ToggleLogin = this.ToggleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({number: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let prod = this.state.number * this.state.number;
    axios.post('http://localhost:8000/multplynumber', {product: prod}).then(res => {
      console.log(res);
      this.fetchVals();
    });
    this.setState({number: ""});
  }

  initSetup = () => {
    axios.post('http://localhost:8000/setupdb').then(res => {
      console.log(res);
      this.fetchVals();
    });
  }

  componentDidMount(){
    this.fetchVals();
  }

  fetchVals = () => {
    axios.get('http://localhost:8000/values').then(
      res => {
        const values = res.data;
        console.log(values.data);
        this.setState({ values: values.data });
    });
  }
  changeState() {
    const { isLogginActive } = this.state;
      this.rightSide.classList.toggle("right");
      this.rightSide.classList.toggle("left");
    
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  ToggleLogin()
  {
    this.setState(prevState => ({ isLoggedout: !prevState.isLoggedout }));
  }

  render(){
    const { isLogginActive } = this.state;
    const { isLoggedout } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        {isLoggedout && (
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login action={this.ToggleLogin} containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register action={this.ToggleLogin} containerRef={ref => (this.current = ref)} />
            )}

          </div>
          
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
        )}
      </div>
    );
  }

}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
