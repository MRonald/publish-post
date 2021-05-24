import React from 'react';
import styled from 'styled-components';

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

export default function PostItem({ date, text }) {
    return (
        <PostItemWrapper>
            <div>
                <span>{date}</span>
                <span>{text}</span>
            </div>
            <button>Apagar</button>
        </PostItemWrapper>
    );
}
