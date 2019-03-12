import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoadingOverlay from 'react-loading-overlay';

class Home extends Component {

    constructor(props){
      super(props);

      this.state = {
        overlayActive: false,
        overlaySpinnerActive: false,
        overlayText:"",
      }

      this.imgId = 'ah3bd9-inputfile';
      this.onChange = this.onChange.bind(this);
    }

  onChange(){
    this.setState({
        overlayActive: true,
        overlaySpinnerActive: true,
        overlayText:"Accessing Image...",
    })

    const file   = document.getElementById(this.imgId).files[0];
    const reader = new FileReader();

    const that = this;
    reader.onloadend = function(){
      that.props.bubble('verifyImg', reader.result);
      that.props.bubble('uploaded', true);
      that.props.bubble('imgBlob', file);
      that.props.history.push('/classify');
      that.setState({
          overlayActive: false,
      })

    }

    if (file){
      reader.readAsDataURL(file);
      this.setState({
          overlayActive: true,
          overlaySpinnerActive: true,
          overlayText:"Accessing Image...",
      })
    }

  }



  render(){
    return (
      <LoadingOverlay
        active={this.state.overlayActive}
        spinner={this.state.overlaySpinnerActive}
        text={this.state.overlayText}
        onClick={this.handleClick}
      >
        <div className="App">
          <header className="App-header">
            <div className="App-panel">
              <Link
                className="App-link"
                to="/verify-url"
              >
                Enter Url
              </Link>
            </div>
              <p>
                Or
              </p>
            <div className="App-panel">
              <div id="input-hider">
                <input type="file" onChange={this.onChange} id={this.imgId} accept="image/*"/>
              </div>
              <div className="App-link" onClick={()=>document.getElementById(this.imgId).click()}>Upload file / Take photo {this.state.overlayText}</div>
            </div>
          </header>
        </div>
      </LoadingOverlay>
    );
  }

}

export default Home
