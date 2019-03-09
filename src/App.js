import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import axios from 'axios';

import addcircle from './addcircle.png';

import { createBrowserHistory } from 'history';

import LoadingOverlay from 'react-loading-overlay';

const history = createBrowserHistory();

class ClassifyUrl extends Component {
  constructor(props){
    super(props);
    this.state = { 
      overlayActive: false,
      overlaySpinnerActive: false,
      overlayText:"Loading..",
      getApiUrl: props.getApiUrl || 'https://dsm.just-minimalism.com/classify-url',
      classifyImg: props.classifyImg,
      enableClassify: true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClassify = this.handleClassify.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  exampleMapping(data){
    console.log("inside exampleMapping-->", data,data);
    console.log("<--inside exampleMapping");
    const dict = {
      animal: "This is an animal mouse!",
      computer: "This is a computer mouse!",
      micky: "This is micky mouse (and disney just made a dollar).",
    }
    return dict[data.predictions[0][0]];
  }

  handleClick(){
    this.toggleOverlay();
  }

  toggleOverlay(){
    this.setState(state => ({
        overlayActive: !this.state.overlayActive
      })
    );
  }

  toggleSpinner(){
    this.setState(state => ({
        overlaySpinnerActive: !this.state.overlaySpinnerActive
      })
    );
  }

  

  handleClassify(){
    //const base = 'https://dsm.just-minimalism.com/classify-url';
    const base = 'http://138.197.227.42/classify-url';
    const params = '?url=' + encodeURIComponent(this.state.classifyImg);
    this.toggleOverlay();
    this.toggleSpinner();
    this.setState({ overlayText: 'Loading..'});
    console.log("in handle classify");
    axios.get(base + params)
      .then((response) => {
          console.log(response);
          this.setState({ 
            overlayText: this.exampleMapping(response.data),
            enableClassify: false
          });
          this.toggleSpinner();
        }
      )
  }

  render() {
    return (
      <LoadingOverlay
        active={this.state.overlayActive}
        spinner={this.state.overlaySpinnerActive}
        text={this.state.overlayText}
        onClick={this.handleClick}
      >
        <div className="App-header">
          <img src={this.props.classifyImg} className="App-logo" alt=""/>
          <Link className="App-button-link" to="/classify" >
            <button className="App-button" onClick={this.handleClassify} disabled={!this.state.enableClassify}>
              Classify..
            </button>
          </Link>
          <Link to="/" className="App-back-link">Back</Link>
        </div>
      </LoadingOverlay>
    )
  }
}

class VerifyUrl extends Component {
  constructor(props){
    super(props);
    console.log("we are in the component");
    this.state = { 
      x : addcircle,
      imgSrc : '',
    }

  }

  render() {
    console.log("IN VERIFY RENDER WITH", this.props);
    return (
      <div className="App-header">
        <img src={this.props.imgSrcClean} className="App-logo"  onError={this.props.handleError} alt=""/>
        <input type="text" value={this.props.imgSrcRaw} className="App-text-input" onChange={this.props.handleChange}/>
        <Link className="App-button-link" to="/classify" >
          <button className="App-button">
            Next
          </button>
        </Link>
      </div>
    )
  }
}

function Home(props) {
    return (
      <div className="App">
        <header className="App-header">
          <Link
            className="App-link"
            to="/verify-url"
          >
            Enter Url
          </Link>
          <p>
            Or
          </p>
          <Link
            className="App-link"
            to="https://reactjs.org"
          >
            Take Photo / Upload Photo
          </Link>
        </header>
      </div>
    );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      classifyImg: '',
      verifyImgUrl: null,
      verifyImg: addcircle,
      validImg: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }


  handleError(event) {
    console.log("IN ERROR WITH EVENT", event.target);
    this.setState(state => ({
      verifyImg: addcircle
    }))
  }

  handleChange(event) {
    const val = event.target.value;
    this.setState(state => ({
      verifyImgUrl: val,
      verifyImg: val,
    }))
  }

  render() {
    return (
      <Router history={history}>
        <div className="app-container">
          <Route path="/" exact component={Home} />
          <Route path="/verify-url" exact render={(props) => 
              <VerifyUrl 
                classifyImg={this.state.classifyImg}
                handleChange={this.handleChange} 
                handleError={this.handleError} 
                imgSrcRaw={this.state.verifyImgUrl}
                imgSrcClean={this.state.verifyImg}
              />
          }/>
          <Route path="/classify" exact render={(props) => 
              <ClassifyUrl 
                classifyImg={this.state.verifyImg}
                handleSubmit={this.handleSubmit} 
              />
          }/>
        </div>
      </Router>
    )
  }
}

export default App;
