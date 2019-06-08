import React from 'react'

import CommentItem from './CommentItem'

import CommentListStyle from "@/css/commentList.scss"

// after configuring parameter 'modules' to css loader, this scss can be modularized and used
console.log(CommentListStyle)

export default class CommentList extends React.Component {

    constructor() {
        super();
        this.state = {
            CmtList: [
                {id:1, user:'zhangshan', content:'ah ha, i am the first'},
                {id:2, user:'lishi', content:'ah ha, i am the second'},
                {id:3, user:'wangwu', content:'ah ha, i am the third'},
                {id:4, user:'zhaoliu', content:'ah ha, i am the forth'},
                {id:5, user:'tianqi', content:'ah ha, i am the fifth'}
            ]
        }
    }

    render() {
        return <div>
            <h1 className={CommentListStyle.commentListStyle}>This is comment list component</h1>
            {this.state.CmtList.map(each =>
                <CommentItem key={each.id} each={each} />
            )}
        </div>
    }
}