import { FETCH_COMMENTS } from './actionTypes';
import axios from 'axios';

export const fetchComments = () => dispatch => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let url_localhost = 'http://localhost:12000/getComments';
    let headers = {
        'Content-Type': 'application/json'
    };
    axios.get(url, {headers}).then((response) => {
        console.log(response);
        let commentList = [];

        response.data.map(each => {
            commentList.push({
                id : each.id,
                user : 'User' + each.id,
                content : each.title
            })
        })

        // action type and data will be dispatched to reducer
        dispatch({
            type : FETCH_COMMENTS,
            payload : commentList
        })
    }).catch((error) => {
        console.log('Handle error here:' + error)
    })
}