import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../contexts/PostsContext';

const InsertFieldWrapper = styled.div`
    padding: 15px;
    width: calc(100% - 30px);
    background-color: #2a6afc;
    color: white;

    form {
        width: 100%;

        div:first-child {
            display: flex;
            justify-content: space-between;
            font-size: 1.1rem;

            button {
                padding: 7px;
                font-size: 1rem;
                border-radius: 5px;
                border: none;
                cursor: pointer;
            }

            button:hover {
                box-shadow: 0 0 10px black;
            }
        }

        div:last-child {
            margin-top: 15px;
            width: 100%;
            text-align: center;

            textarea {
                margin: auto;
                padding: 5px;
                width: 80%;
                height: 80px;
                font-size: 1.2rem;
                border-radius: 10px;
                resize: none;
                outline: none;
            }
        }
    }
`;

export default function InsertField() {
    const [text, setText] = useState("");
    const {
        addPost
    } = useContext(SearchContext);

    function getCurrentDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hour}:${minute}`;
    }

    function onChangeText(event) {
        setText(event.target.value);
    }

    function publishPost(event) {
        event.preventDefault();
        const post = {
            "text": text,
            "date": getCurrentDate()
        }
        addPost(post);
        setText("");
    }

    return (
        <InsertFieldWrapper>
            <form className="form">
                <div>
                    <label htmlFor="contentPost">O que está acontecendo?</label>
                    <button onClick={publishPost}>Publicar</button>
                </div>
                <div>
                    <textarea value={text} id="contentPost" onChange={onChangeText} />
                </div>
            </form>
        </InsertFieldWrapper>
    );
}
