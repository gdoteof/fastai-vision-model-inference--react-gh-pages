import React, { Component } from 'react';


class UrlChooser extends Component{

  constructor(props){
    super(props)
    this.state = {
      baseUrl:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const val = event.target.value;
    this.props.bubble("baseUrl", val);
  }

  render(){
    return(
            <div id="app-info">
              <select id="App-backends-select" onChange={this.handleChange} value={this.props.baseUrl}>
                <option value="https://dsm.just-minimalism.com">https://dsm.just-minimalism.com/</option>
                <option value="http://138.197.227.42">http://138.197.227.42/</option>
              </select>
            </div>
    )
  }
}

export default UrlChooser
