import React from 'react';
import ReactDOM from 'react-dom';
import AnalogDisplay from '../src/analog-display.js';

class Clock extends React.Component {
    constructor(props)
    {   super(props)
        this.launchClock()// start Clock updating
        this.state={currentTime: (new Date().toLocaleString())}
    }
    launchClock(){
        setInterval(()=>{
            console.log('Updateing time...')
            this.setState({currentTime: (new Date().toLocaleString())})
        }, 1000)
    }
    render() {
        console.log('Rendering Clock...')
        return <div><AnalogDisplay time={this.state.currentTime}/></div>
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('content')
)
