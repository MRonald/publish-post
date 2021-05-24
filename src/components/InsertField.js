import React, { useState } from 'react';

import styled from 'styled-components';

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

    function getCurrentDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        console.log(`${day}/${month}/${year} ${hour}:${minute}`);
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
        //setPostList(postList.push(post));
        setText("");
    }

    return (
        <InsertFieldWrapper>
            <form className="form">
                <div>
                    <label for="name-1">O que está acontecendo?</label>
                    <button onClick={publishPost} class="button is-dark">Publicar</button>
                </div>
                <div>
                    <textarea value={text} name="name-1" onChange={onChangeText} />
                </div>
            </form>
        </InsertFieldWrapper>
    );
}
