import React from 'react';
import './Ticker.css'

export default
class Ticker extends React.Component {
       state = {
           value: 367,
       };

        //   fetch(`https://blockchain.info/ru/ticker/${props.pair}`).then(r=>r.json()).then(res=>{this.setState({value: "367",});
        //   });


    render() {
        const {pair} = this.props;
        return (<div className="ticker">
                <p>{pair.toUpperCase().replace('_', ' to ')}</p>
                <p>{this.state.value.toFixed(2)}</p>
            </div>
        )
    }
}




//

