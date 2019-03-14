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
      this.compress = this.compress.bind(this);
    }

    compress(e) {
        const width = 900;
        const reader = new FileReader();
        const file   = document.getElementById(this.imgId).files[0];
        reader.readAsDataURL(file);
        reader.onerror = error => console.log(error);
        const that = this;
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                    const elem = document.createElement('canvas');
                    const scaleFactor = width / img.width;
                    elem.width = width;
                    elem.height = img.height * scaleFactor;
                    const ctx = elem.getContext('2d');
                    // img.width and img.height will contain the original dimensions
                    ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
                    ctx.canvas.toDataURL('image/jpeg');
                    that.props.bubble('verifyImg', reader.result);
                    that.props.bubble('uploaded', true);
                    that.props.bubble('imgBlob', file);
                    that.props.history.push('/classify');
                    that.setState({
                        overlayActive: false,
                    })

                }
        };
    }

    onChange(e){
      this.compress();
    }

  //onChange(e){
  //  this.setState({
  //      gverlayActive: true,
  //      overlaySpinnerActive: true,
  //      overlayText:"Accessing Image...",
  //  })

  //  const file   = document.getElementById(this.imgId).files[0];
  //  const reader = new FileReader();

  //  const that = this;
  //  reader.onloadend = function(){
  //  }

  //  if (file){
  //    reader.readAsDataURL(file);
  //    this.setState({
  //        overlayActive: true,
  //        overlaySpinnerActive: true,
  //        overlayText:"Accessing Image...",
  //    })
  //  }

  //}



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
