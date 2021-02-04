import React from 'react';

const mailList = () => {
    return (
        <div classNmae="ui container comments" style={{ marginLeft: 100 }}>
            <div classNmae="comment">
                <a href="/" classNmae="avatar">
                    <img alt='avatar' />
                </a>
                <div classNmae="content">
                    <a href="/" classNmae="author">Matt</a>
                </div>
                <div classNmae="metadata">
                    <span classNmae="date">Today at 5:42PM</span>
                </div>
            </div>
        </div>
    )
}
export default mailList