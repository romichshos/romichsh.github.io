import React from 'react';

class Counter extends React.Component{
    render() {
     return (
        <div>
            <span>Clicked {this.props.value} times!</span>
        </div>
     )
    }
}

export default Counter