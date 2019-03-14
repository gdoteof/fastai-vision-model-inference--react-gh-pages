import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';


class ClassifyUrl extends Component {
  constructor(props){
    super(props);
    this.state = { 
      overlayActive: false,
      overlaySpinnerActive: false,
      overlayText:"Waiting for model on remote server to answer...",
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
    const dict = {
      animal: "This is an animal mouse!",
      computer: "This is a computer mouse!",
      mickey: "This is mickey mouse",
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
    this.setState({ overlayText: 'Classifying image'});

    if(this.props.uploaded){
      this.doPostCallback();
    } else {
      this.doGetCallback();
    }
	}

 	doPostCallback(){
    //const base = 'https://dsm.just-minimalism.com/classify-url';
    //const base = 'http://138.197.227.42/classify-url';
      fetch(this.props.baseUrl + '/classify-url', {
			  method: "POST",
			  body: this.props.imgBlob
			}).then(res => {
				return res.json().then(obj=> {
          this.setState({ 
            overlayText: this.exampleMapping(obj),
            enableClassify: false,
            overlayActive: true
          });
          this.toggleSpinner();
				})
      }).catch((e1) => {
        for(var i in e1){
          console.log("i, e1[i]=====>", i, e1[i]);
        }
        const msg = "at:" + e1.lineNumber + "\n"
                  + "in:" + e1.fileName + "\n"
                  + "er:" + e1.message;
        console.log("e1", e1);
        console.log("e1.stack", e1.stack);
          this.setState({ 
            overlayText: msg,
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
        className="App-overlay"
      >
        <div className="App-header">
          <div className="App-page">
            <div className="App-panel">
              <img src={this.props.classifyImg} className="App-preview-img" alt=""/>
              <Link className="App-link-button" to="/classify" onClick={this.handleClassify} >
                  Classify
              </Link>
            </div>
          </div>
        </div>
        <Link to="/" className="App-back-link">Back</Link>
      </LoadingOverlay>
    )
  }
}

export default ClassifyUrl
