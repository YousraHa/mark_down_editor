import React, { Component }  from 'react';
import './App.css';
import {sampleText} from './sampleText';
import marked from 'marked';

class App extends Component {

  state = {
    text: sampleText,
    isShow: false
  }

  componentDidMount(){
    const text = localStorage.getItem('text');
    if (text){
      this.setState({text})
    } else{
      this.setState({text: sampleText})
    }
  };

  componentDidUpdate(){
    const {text} = this.state;
    localStorage.setItem('text', text)
  }

  handleShow = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow });
    console.log('isshow', isShow)
  }

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text})
  };

  renderText = text =>{
    const __html = marked(text, {sanitize: true})
    return {__html}
}
  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-sm-6">
            <textarea onChange={this.handleChange} value={this.state.text} className="form-control" rows="35"/>
          </div>
            <button onClick={this.handleShow}>Boutton</button>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
            <div>
              {sampleText}
            </div>
          </div>
        </div>
      </div>
    )
}
}

export default App;


// import React, {Component} from 'react';
// import './App.css';
// import marked from 'marked';
// import {sampleText} from './sampleText';

// class App extends Component {
//   state={
//     text: sampleText
//   };

//   handleChange = event =>{
//     const text = event.target.value;
//     this.setState({text})
//   };

//   renderText = text =>{
//     const __html = marked(text, { sanitize : true });
//     return {__html}
//   }

 
//   render(){
//     return(
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6">
//             <textarea value={this.state.text} onChange={this.handleChange} rows="35"/>
//           </div>
//           <div className="col-sm-6">
//             <div dangerouslySetInnerHTML={this.renderText(this.state.text)} >
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;