import React from 'react';
import ReactDOM from 'react-dom';

class Tooltip  extends React.Component{

    constructor(props){
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
        }

    // declare method for display  and hiding Text
    toggle() {
       const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this);
       this.setState({opacity: !this.state.opacity,
                          top,
                         left
       })

    }

    render(){
        //debugger;
       const style ={
           zIndex: (this.state.opacity) ? 1000 : -1000,
           opacity: +this.state.opacity,
           top: (this.state.top || 0) + 20,
           left: (this.state.left || 0) -30
       }
       return (
           <div style={{display : 'inline'}}>
            <span style={{color:'blu'}}
               onMouseEnter={this.toggle}
               onMouseOut={this.toggle}>
                {this.props.children}
             </span>
             <div className="tooltip-bottom"
                  style={style}
                  role="tooltip">
                <div className="tooltip-arrow">

                </div>
                <div className="tooltip-inner">
                 {this.props.text}
                </div>
             </div>
           </div>
       )
    }
}

export default Tooltip