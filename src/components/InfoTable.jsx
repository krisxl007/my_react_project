import React from 'react'

// Use function to create a component in React, 'return' is required for rendering, also need to export component for using
export default function InfoTable(props) {
    console.log(props);
    return <table border="1px">
        <tbody>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email address</th>
        </tr>
        <tr>
            <td>{props.userInfo.id}</td>
            <td>{props.userInfo.username}</td>
            <td>{props.userInfo.email}</td>
        </tr>
        </tbody>
    </table>
}