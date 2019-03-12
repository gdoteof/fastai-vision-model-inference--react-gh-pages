import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {

    constructor(props){
      super(props);
      this.imgId = 'ah3bd9-inputfile';
      this.onChange = this.onChange.bind(this);
    }

  onChange(){
    const file   = document.getElementById(this.imgId).files[0];

    const reader = new FileReader();

    const that = this;
    reader.onloadend = function(){
      that.props.bubble('verifyImg', reader.result);
      that.props.bubble('uploaded', true);
      that.props.bubble('imgBlob', file);
      that.props.history.push('/classify');

    }

    if (file){
      reader.readAsDataURL(file);
    }

  }



  render(){
    return (
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
            <div className="App-link" onClick={()=>document.getElementById(this.imgId).click()}>Upload file / Take photo</div>
          </div>
        </header>
      </div>
    );
  }

}

export default Home
