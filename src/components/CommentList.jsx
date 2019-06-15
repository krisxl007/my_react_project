import React from 'react'

import axios from 'axios'

import CommentItem from './CommentItem'

import CommentListStyle from "@/css/commentList.scss"

// after configuring parameter 'modules' to css loader, this scss can be modularized and used
console.log(CommentListStyle)

export default class CommentList extends React.Component {

    constructor() {
        super();
        this.state = {
            CmtList: []
        }
    }

    componentDidMount(){
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let url_localhost = 'http://localhost:12000/getComments';
        let headers = {
            'Content-Type': 'application/json'
        };
        axios.get(url_localhost, {headers}).then((response) => {
            console.log(response);
            let commentList = [];

            response.data.map(each => {
                commentList.push({
                    id : each.id,
                    user : 'User' + each.id,
                    content : each.title
                })
            })

            this.setState({
                CmtList : commentList
            })
        }).catch((error) => {
            console.log('Handle error here:' + error)
        }).finally( () => {
            console.log('Handle finally here...')
        })
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