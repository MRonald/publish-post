import React from 'react';
import { createGlobalStyle } from 'styled-components';
import InsertField from './components/InsertField';
import PostList from './components/PostList';
import PostsProvider from './contexts/PostsContext';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Ubuntu, Arial, sans-serif;
    }

    body {
        background-color: rgba(195, 195, 195, .4);

        .content {
            margin: 15px auto;
            width: 70%;
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, .2);
            overflow: hidden;
        }
    }
`;

export default function App() {
    return (
        <div className="content">
            <PostsProvider>
                <InsertField />
                <PostList />
                <GlobalStyle />
            </PostsProvider>
        </div>
    );
}
