import React from "react";

class Note extends React.Component{
    confirmLeave(e){
        e.returnValue = 'Do you realywant to close page?';

    }

    componentDidMount(){
        console.log('Attaching confirmMessage event listener for beforeunload' );
        window.addEventListener('beforeunload', this.confirmLeave)
    }

    componentWillUnmount(){
        console.log('Removing confirmMessage event listener for beforeunload' );
        window.removeEventListener('beforeunload', this.confirmLeave)
    }

    render() {
        console.log('render');
        return <div>Here will be our input field for notes (parent will remove in {this.props.secondLeft} seconds)</div>
    }
}

export default Note