import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../contexts/PostsContext';

const PostItemWrapper = styled.div`
    padding: 15px;
    width: calc(100% - 30px);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;

    div {
        display: flex;
        flex-direction: column;
    }

    button {
        padding: 7px;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        background-color: #004dff;
        color: white;
    }

    button:hover {
        box-shadow: 0 0 10px black;
    }
`;

export default function PostItem({ date, text, index }) {
    const {
        removePost
    } = useContext(SearchContext);

    return (
        <PostItemWrapper>
            <div>
                <span>{date}</span>
                <span>{text}</span>
            </div>
            <button onClick={() => removePost(index)}>Apagar</button>
        </PostItemWrapper>
    );
}
