import React from 'react';
import ReactDOM from 'react-dom';
import Logger from './logger.js';

class Content extends React.Component {
    constructor(props)
    {   super(props)
        this.launchClock()// start Clock updating
        this.state={counter: 0,
        currentTime: (new Date().toLocaleString())}
    }
    launchClock(){
        setInterval(()=>{
            this.setState( {
                            counter:++this.state.counter,
                            currentTime: (new Date().toLocaleString())
                           }
                         )
        }, 1000)
    }

    componentDidMount(){
        console.log(ReactDOM.findDOMNode(this));
    }

    componentWillMount(){
        console.log(ReactDOM.findDOMNode(this));
    }

    render() {
       if (this.state.counter > 2) return <div/>

        return (<Logger  time="{this.state.currentTime}"></Logger>

        )//<div><AnalogDisplay time={this.state.currentTime}/></div>
    }
}



ReactDOM.render(
    <Content />,
    document.getElementById('content')
)
