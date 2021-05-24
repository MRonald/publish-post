import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../contexts/PostsContext';
import PostItem from './PostItem';

const PostListWrapper = styled.div`
    width: 100%;
    background-color: white;
`;

export default function PostList() {
    const {
        postList
    } = useContext(SearchContext);

    return (
        <PostListWrapper>
            <ul>
                {
                    postList.map(
                        (post, index) => (
                            <li key={index}>
                                <PostItem date={post.date} text={post.text} index={index} />
                            </li>
                        )
                    )
                }
            </ul>
        </PostListWrapper>
    );
}
