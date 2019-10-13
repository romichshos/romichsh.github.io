import React from 'react';
import Link from './link';
import axios from 'axios';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: []
        }
    }
    componentDidMount() {
        axios.get(this.props['data-url'])
            .then((response)=>response.data)
            .then((menus)=>this.setState({menus: menus}))
            .catch((error)=>console.log("ERROR==>  "+error.message))
    }

    render() {
           return (
            <div>
                {this.state.menus.map((v,i) => {
                    return <div key={i}><Link label={v}/></div>
                })}
            </div>
        )
    }
}


export default Menu