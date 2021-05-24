import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListWrapper = styled.div`
    width: 100%;
    background-color: white;
`;

export default function PostList() {
    return (
        <PostListWrapper>
            <PostItem />
            {
                // postList.map((post, index) => (
                //     <div key={index} className="post-item">
                //         <span className="date">{post.date}</span>
                //         <p>{post.text}</p>
                //         <button onClick={deletePost} className="button">apagar</button>
                //     </div>
                // ))
            }
        </PostListWrapper>
    );
}
