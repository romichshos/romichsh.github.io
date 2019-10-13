import ReactDOM from "react-dom";
import React from "react";
import Logger from "./logger";
import {container} from '../src/css/bootstrap.css';

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            ///.then((usersObj)=>{})
            .then((users) => this.setState({users: users}))
            .catch((error)=> {console.log(error.message);})
            //.then((users)=>{console.log(users);})
    }

    render() {
        return <div className="container">
            <h1>List of Users</h1>
            <table className="table-striped table-condensed table table-bordered table-hover">
                <tbody>{this.state.users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.name} {user.user_name}</td>
                        <td> {user.phone}</td>
                        <td> {user.website}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}
export default Users