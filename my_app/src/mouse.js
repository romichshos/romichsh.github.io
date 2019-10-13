import React from "react";


class Mouse extends React.Component {
    handleMouseOver(event){
        console.log('mouse is over with event')
        window.e =event;
        console.dir(event.target)
        setTimeout(()=>{
            console.table(event.target)
            console.table(window.e.target)
            }, 2345 )
    }

    render() {
        return (
        <div>
            <div style={{border: '1px solid red'}}
            onMouseOver={this.handleMouseOver.bind(this)} >
                Open dev tools and move  you mouse cursor over here
            </div>
        </div>
        )
    }
}

export default Mouse