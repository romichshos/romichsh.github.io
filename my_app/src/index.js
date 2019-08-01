import React from 'react';
import ReactDOM from 'react-dom';
import Users from './user';
import Note from './note';
import b from './css/bootstrap.css'


//let dataUrl = 'http://jsonplaceholder.typicode.com/users';
//'/src/real-user-data.json';

let secondLeft =5;
let interval = setInterval(()=>{
 if (secondLeft===0) {
     ReactDOM.render(
         <div>
            Note was remove after {secondLeft} seconds
         </div>,
         document.getElementById('content')
     )
   clearInterval()
  }
 else {
     ReactDOM.render(
         <div>
             <Note secondLeft={secondLeft} seconds/>
         </div>,
         document.getElementById('content')
     )
    }
 if (secondLeft>=1) secondLeft--;
 }, 1000
)




ReactDOM.render(
    <div>

    </div> ,
    document.getElementById('content')
)
