import { useState } from "react";

export default function App() {

    const [text, setText] = useState("");
    const [postList, setPostList] = useState([
        { "text": "lorem ipsum dolor sit amet", "date": "moment().format('DD/MM/YYYY HH:mm')" }
    ]);

    function onChangeText(event) {
        setText(event.target.value);
    }

    function publishPost(event) {
        event.preventDefault();
        const post = {
            "text": text,
            "date": "moment().format('DD/MM/YYYY HH:mm')"
        }
        console.log(postList);
        setPostList(postList.push(post));
        setText("");
    }

    function deletePost(event) {
        event.preventDefault();
    }

    return (
        <div className="main-wrapper">
            <div className="box">
                <form className="form">
                    <div class="field">
                        <label for="name-1">O que está acontecendo?</label>
                        <div class="control">
                            <textarea value={text} name="name-1" rows="5" onChange={onChangeText} class="input" />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button onClick={publishPost} class="button is-dark">Publicar</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="post-list">
                {
                    postList.map((post, index) => (
                        <div key={index} className="post-item">
                            <span className="date">{post.date}</span>
                            <p>{post.text}</p>
                            <button onClick={deletePost} className="button">apagar</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
