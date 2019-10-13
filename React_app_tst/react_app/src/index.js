import React, { Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'

const PeopleList = ({data}) => {
    <ol className={"people-list"}>
    {data.results.map((person, i) => {
        const {title, first, last} = person.name
        return <li key={i}>{title} {first} {last}</li>
    })
    }
    </ol>
};

const RandomMeUsers = DataComponent(
    PeoleList,
    "https://randomuser.me/api/"
)

render(
        <RandomMeUsers count={10} />,
       document.getElementById('root')
)

const DataComponent = (ComposedComponent,  url) =>
    class DataComponent extends Component {
    consructor(props) {
        super(props)
        this.state ={
            data: [],
         loading: false,
          loaded: false
        }
    }
}
componentWillMount(){
    this.setState({loading:true})
    fetch(url)
        .then(response => this.response.json())
        .then(data => this.setState({
            loaded: true,
            loading: false,
            data
        }))
}

render() {
    return (
        <div className="data-component">
            {(this.state.loading) ?
                <div>Loading...</div>
                : <ComposedComponent {...this.state}/>
            }
        </div>
    )
}