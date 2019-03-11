import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

class ClassifyUrl extends Component {
  constructor(props){
    console.log("ccc props", props);
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
    this.doPostCallback = this.doPostCallback.bind(this);
    this.doGetCallback = this.doGetCallback.bind(this);
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
    this.toggleOverlay();
    this.toggleSpinner();
    this.setState({ overlayText: 'Loading..'});

    if(this.props.uploaded){
      this.doPostCallback();
    } else {
      this.doGetCallback();
    }
	}

 	doPostCallback(){
    //const base = 'https://dsm.just-minimalism.com/classify-url';
    const base = 'http://138.197.227.42/classify-url';
			fetch(base, {
			  method: "POST",
			  body: this.props.imgBlob
			}).then(res => {
        console.log("inside the yes", res);
				return res.json().then(obj=> {
          console.log("inside the object parse", obj);
          this.setState({ 
            overlayText: this.exampleMapping(obj),
            enableClassify: false
          });
          this.toggleSpinner();
				})
      }).catch(error => {
        console.log("THEE CATCH", error);
          this.setState({ 
            overlayText: error.message,
            enableClassify: true
          });
          this.toggleSpinner();
      });
		}
  

  doGetCallback(){
    const base = 'https://dsm.just-minimalism.com/classify-url';
    //const base = 'http://138.197.227.42/classify-url';
    const params = '?url=' + encodeURIComponent(this.state.classifyImg);
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

export default ClassifyUrl
