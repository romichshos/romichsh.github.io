import React from "react";


class Check extends React.Component {
    constructor(props) {
        super(props)
      //  this.handleChange = this.handleChange.bind(this)
        this.state = {title: ''}
    }
    handleChange(event) {
        this.setState({title: event.target.value});
    }



    render() {
        //debugger;
       return (
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
        )
    }
}

export default Check