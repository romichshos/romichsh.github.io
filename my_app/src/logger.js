import ReactDOM from "react-dom";
import React from "react";

class Logger extends React.Component{
    constructor(props)
    {   super(props)
        console.log('constructor');
    }

    componentDidMount(e){
        console.log('componentDidMount is triggered')
        console.log('DOM node: ', ReactDOM.findDOMNode(this))
    }

    componentWillMount(){
        console.log('componentWillMount is triggered');
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps is triggered')
        console.log('new props: ', newProps)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate is triggered')
        console.log('new props: ', newProps)
        console.log('new state: ', newState)
        return true
    }

    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate is triggered')
        console.log('new props: ', newProps)
        console.log('new state: ', newState)
    }

    render(){
        console.log('rendering ....Display')
        return (
                <div>{this.props.time}</div>
            )
    }
}

export default Logger