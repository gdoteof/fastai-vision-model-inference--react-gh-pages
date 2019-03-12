import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


import addcircle from './addcircle.png';


import { name as app_name } from '../package.json';

import ClassifyUrl from './ClassifyUrl'
import Home from './Home'


console.log("Name is ", app_name);


class VerifyUrl extends Component {
  constructor(props){
    super(props);
    console.log("we are in the component");
    this.state = { 
      x : addcircle,
      imgSrc : '',
      displayImg: false,
      enableNext: false
    }

      this.handlePaste = this.handlePaste.bind(this);
  }

  handlePaste(e,v){
    console.log("OP", e.clipboardData);
    console.log("--2", e.clipboardData.getData('Text'));
    const pastedUrl = e.clipboardData.getData('Text');
    this.props.bubble('verifyImg', pastedUrl);
    this.props.history.push('/classify');
  }

  //<img src={this.props.imgSrcClean} className="App-preview-img"  onError={this.props.handleError} onLoad={()=> this.setState({enableNext:true})} alt=""/> 
  render() {
    return (
      <div className="App-header">
        <div className="App-page">
          <input type="text" value={this.props.imgSrcRaw} className="App-text-input" onChange={this.props.handleChange} placeholder="Paste a URL" onPaste={this.handlePaste}/>
        </div>
      </div>
    )
  }
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      classifyImg: '',
      verifyImgUrl: null,
      verifyImg: addcircle,
      validImg: false,
      uploaded: false,
      imgBlob: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.bubble = this.bubble.bind(this);
  }

  bubble(name, val) {
    console.log("calling set state in bubble with", name, val);
    this.setState(state => (state[name]=val));
  }


  handleError(event) {
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
  render(props) {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app-container">
          <Route path="/" exact render={ (props) => 
            <Home {...props} bubble={this.bubble}></Home> 
          } />
          <Route path="/verify-url" exact render={(props) => 
              <VerifyUrl 
                {...props}
                classifyImg={this.state.classifyImg}
                handleChange={this.handleChange} 
                handleError={this.handleError} 
                imgSrcRaw={this.state.verifyImgUrl}
                imgSrcClean={this.state.verifyImg}
                bubble={this.bubble}
              />
          }/>
          <Route path="/classify" exact render={(props) => 
              <ClassifyUrl 
                {...props}
                classifyImg={this.state.verifyImg}
                handleSubmit={this.handleSubmit} 
                uploaded={this.state.uploaded}
                imgBlob={this.state.imgBlob}
              />
          }/>
        </div>
      </Router>
    )
  }
}

export default App;
