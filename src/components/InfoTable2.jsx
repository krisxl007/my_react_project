import React from 'react'

// Use class to create a component in React, extends React.Component class and overrides render() method.
export default class InfoTable2 extends React.Component {

    constructor() {
        super();
        this.state = {
            email: 'this is from component state'
        }
    }

    render() {
        // props is parameters place holder of React.Component, which can be used directly
        console.log(this);
        return <table border="1px">
            <tbody>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email address</th>
            </tr>
            <tr>
                <td>{this.props.userInfo.id}</td>
                <td>{this.props.userInfo.username}</td>
                <td>{this.state.email}</td>
            </tr>
            </tbody>
        </table>
    }
}