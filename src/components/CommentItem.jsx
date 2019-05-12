import React from 'react'

export default class CommentItem extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            <h2>User: {this.props.each.user}</h2>
            Comment: {this.props.each.content}
        </div>
    }
}