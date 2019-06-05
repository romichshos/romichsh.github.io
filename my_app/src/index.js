import React from 'react';
import ReactDOM from 'react-dom';


 let helloWord = <h1>Hello word</h1>;
 class HelloWord extends React.Component{
  render(){
   //console.log(Object.isFrozen(this.props));
   //  if (this.props.heading)  return React.createElement('h1', null, 'Hello') else return React.createElement('p', null, 'Hello')
   return (
          <div>
              {helloWord}
              {helloWord}
          </div>
         )
  }
 }
/////////////////
 class DateTime extends React.Component{
     render(){
         let dateTimeNow = new Date().toLocaleString()
         return <span>Current date and time {dateTimeNow}</span>
     }
 }
ReactDOM.render(<HelloWord/>
              , document.getElementById('content'));

