import React from 'react';
import CommentItem from './CommentItem';
import CommentListStyle from "@/css/commentList.scss";
import { connect } from 'react-redux';
import { fetchComments } from '@/actions/getAction';
import PropTypes from 'prop-types';

// after configuring parameter 'modules' to css loader, this scss can be modularized and used
console.log(CommentListStyle)

class CommentList extends React.Component {

    componentDidMount(){
        this.props.fetchComments();
    }

    render() {
        return <div>
            <h1 className={CommentListStyle.commentListStyle}>This is comment list component</h1>
            {this.props.commentLists.map(each =>
                <CommentItem key={each.id} each={each} />
            )}
        </div>
    }
}

CommentList.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    commentLists: PropTypes.array.isRequired
};

// This is to assign props 'CmtList' from the state of redux store
const mapStateToProps = state => ({
    // state.getComments is to find the reducer from combineReducers
    commentLists: state.getComments.comments
});

// Connects const 'mapStateToProps' and fetchComments function in this component
export default connect(mapStateToProps, {fetchComments}) (CommentList);