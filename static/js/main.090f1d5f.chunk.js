(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/addcircle.259374c6.png"},27:function(e){e.exports={a:"fastai-vision-model-inference--react-gh-pages"}},32:function(e,t,a){e.exports=a(72)},38:function(e,t,a){},39:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),s=a.n(l),o=(a(38),a(2)),r=a(7),c=a(8),u=a(11),p=a(9),m=a(10),h=a(73),d=a(75),b=a(74),g=(a(39),a(14)),f=a.n(g),v=a(27),y=a(28),O=a.n(y),C=a(29),j=a.n(C),k=function(e){function t(e){var a;return Object(r.a)(this,t),console.log("ccc props",e),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={overlayActive:!1,overlaySpinnerActive:!1,overlayText:"Loading..",getApiUrl:e.getApiUrl||"https://dsm.just-minimalism.com/classify-url",classifyImg:e.classifyImg,enableClassify:!0},a.handleClick=a.handleClick.bind(Object(o.a)(Object(o.a)(a))),a.handleClassify=a.handleClassify.bind(Object(o.a)(Object(o.a)(a))),a.toggleOverlay=a.toggleOverlay.bind(Object(o.a)(Object(o.a)(a))),a.doPostCallback=a.doPostCallback.bind(Object(o.a)(Object(o.a)(a))),a.doGetCallback=a.doGetCallback.bind(Object(o.a)(Object(o.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"exampleMapping",value:function(e){console.log("inside exampleMapping--\x3e",e,e),console.log("<--inside exampleMapping");return{animal:"This is an animal mouse!",computer:"This is a computer mouse!",micky:"This is micky mouse (and disney just made a dollar)."}[e.predictions[0][0]]}},{key:"handleClick",value:function(){this.toggleOverlay()}},{key:"toggleOverlay",value:function(){var e=this;this.setState(function(t){return{overlayActive:!e.state.overlayActive}})}},{key:"toggleSpinner",value:function(){var e=this;this.setState(function(t){return{overlaySpinnerActive:!e.state.overlaySpinnerActive}})}},{key:"handleClassify",value:function(){this.toggleOverlay(),this.toggleSpinner(),this.setState({overlayText:"Loading.."}),this.props.uploaded?this.doPostCallback():this.doGetCallback()}},{key:"doPostCallback",value:function(){var e=this;fetch("http://138.197.227.42/classify-url",{method:"POST",body:this.props.imgBlob}).then(function(t){return console.log("inside the yes",t),t.json().then(function(t){console.log("inside the object parse",t),e.setState({overlayText:e.exampleMapping(t),enableClassify:!1}),e.toggleSpinner()})}).catch(function(t){console.log("THEE CATCH",t),e.setState({overlayText:t.message,enableClassify:!0}),e.toggleSpinner()})}},{key:"doGetCallback",value:function(){var e=this,t="?url="+encodeURIComponent(this.state.classifyImg);O.a.get("https://dsm.just-minimalism.com/classify-url"+t).then(function(t){console.log(t),e.setState({overlayText:e.exampleMapping(t.data),enableClassify:!1}),e.toggleSpinner()})}},{key:"render",value:function(){return i.a.createElement(j.a,{active:this.state.overlayActive,spinner:this.state.overlaySpinnerActive,text:this.state.overlayText,onClick:this.handleClick},i.a.createElement("div",{className:"App-header"},i.a.createElement("img",{src:this.props.classifyImg,className:"App-logo",alt:""}),i.a.createElement(h.a,{className:"App-button-link",to:"/classify"},i.a.createElement("button",{className:"App-button",onClick:this.handleClassify,disabled:!this.state.enableClassify},"Classify..")),i.a.createElement(h.a,{to:"/",className:"App-back-link"},"Back")))}}]),t}(n.Component);console.log("Name is ",v.a);var E=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e)),console.log("we are in the component"),a.state={x:f.a,imgSrc:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("IN VERIFY RENDER WITH",this.props),i.a.createElement("div",{className:"App-header"},i.a.createElement("img",{src:this.props.imgSrcClean,className:"App-logo",onError:this.props.handleError,alt:""}),i.a.createElement("input",{type:"text",value:this.props.imgSrcRaw,className:"App-text-input",onChange:this.props.handleChange}),i.a.createElement(h.a,{className:"App-button-link",to:"/classify"},i.a.createElement("button",{className:"App-button"},"Next")))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).imgId="ah3bd9-inputfile",a.onChange=a.onChange.bind(Object(o.a)(Object(o.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(){var e=document.getElementById(this.imgId).files[0],t=new FileReader,a=this;t.onloadend=function(){a.props.bubble("verifyImg",t.result),a.props.bubble("uploaded",!0),a.props.bubble("imgBlob",e),a.props.history.push("/classify")},e&&t.readAsDataURL(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(h.a,{className:"App-link",to:"/verify-url"},"Enter Url"),i.a.createElement("p",null,"Or"),i.a.createElement("div",{id:"input-hider"},i.a.createElement("input",{type:"file",onChange:this.onChange,id:this.imgId,accept:"image/*"})),i.a.createElement("div",{className:"App-link",onClick:function(){return document.getElementById(e.imgId).click()}},"Upload file / Take photo")))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={classifyImg:"",verifyImgUrl:null,verifyImg:f.a,validImg:!1,uploaded:!1,imgBlob:null},a.handleChange=a.handleChange.bind(Object(o.a)(Object(o.a)(a))),a.handleError=a.handleError.bind(Object(o.a)(Object(o.a)(a))),a.bubble=a.bubble.bind(Object(o.a)(Object(o.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"bubble",value:function(e,t){console.log("calling set state in bubble with",e,t),this.setState(function(a){return a[e]=t})}},{key:"handleError",value:function(e){this.setState(function(e){return{verifyImg:f.a}})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState(function(e){return{verifyImgUrl:t,verifyImg:t}})}},{key:"render",value:function(e){var t=this;return i.a.createElement(d.a,{basename:"/fastai-vision-model-inference--react-gh-pages"},i.a.createElement("div",{className:"app-container"},i.a.createElement(b.a,{path:"/",exact:!0,render:function(e){return i.a.createElement(I,Object.assign({},e,{bubble:t.bubble}))}}),i.a.createElement(b.a,{path:"/verify-url",exact:!0,render:function(e){return i.a.createElement(E,{classifyImg:t.state.classifyImg,handleChange:t.handleChange,handleError:t.handleError,imgSrcRaw:t.state.verifyImgUrl,imgSrcClean:t.state.verifyImg})}}),i.a.createElement(b.a,{path:"/classify",exact:!0,render:function(e){return i.a.createElement(k,Object.assign({},e,{classifyImg:t.state.verifyImg,handleSubmit:t.handleSubmit,uploaded:t.state.uploaded,imgBlob:t.state.imgBlob}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.090f1d5f.chunk.js.map