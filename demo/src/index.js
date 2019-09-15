import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author={faker.name.firstName()} 
                    avatar={faker.image.avatar()} 
                    timeAgo="Today at 4:45PM" 
                    comment="Nice blog post">
                </CommentDetails>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author={faker.name.firstName()} 
                    avatar={faker.image.avatar()} 
                    timeAgo="Today at 2:00AM" 
                    comment="Another comment">
                </CommentDetails>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author={faker.name.firstName()} 
                    avatar={faker.image.avatar()} 
                    timeAgo="Yesterday at 5:00PM" 
                    comment="Good article">
                </CommentDetails>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));