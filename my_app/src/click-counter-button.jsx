import React from 'react';

class ClickCounterButton extends React.Component{
    render(){
        return <button
            onClick={this.props.handler}
            className="btn btn-info">
            Don't touch
        </button>
    }
}

export default ClickCounterButton