import React from 'react'

import CommentItemStyle from '@/css/commentItem.scss'

// after configuring parameter 'modules' to css loader, this scss can be modularized and used
console.log(CommentItemStyle)

export default class CommentItem extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div className={CommentItemStyle.itemBorder}>
            <h2 className={CommentItemStyle.userStyle}>User: {this.props.each.user}</h2>
            <p className={CommentItemStyle.commentStyle} >Comment: {this.props.each.content}</p>
        </div>
    }
}