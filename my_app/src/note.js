import React from "react";

class Note extends React.Component{
    confirmLeave(e) {
        let confirmationMessage = 'Do you really want to close?'
        e.returnValue = confirmationMessage     // Gecko, Trident, Chrome 34+
        return confirmationMessage              // Gecko, WebKit, Chrome <34
    }

    componentDidMount(){
        console.log('Attaching confirmMessage event listener for beforeunload' );
        window.addEventListener('onbeforeunload', this.confirmLeave)
    }

    componentWillUnmount(){
        console.log('Removing confirmMessage event listener for beforeunload' );
        window.removeEventListener('onbeforeunload', this.confirmLeave)
    }

    render() {
        console.log('render');
        return <div>Here will be our input field for notes (parent will remove in {this.props.secondLeft} seconds)</div>
    }
}

export default Note