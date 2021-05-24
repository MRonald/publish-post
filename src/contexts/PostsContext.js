import { createContext, useState } from 'react';

export const SearchContext = createContext({});

export default function PostsProvider({ children }) {
    const [postList, setPostList] = useState([
        {
            "text": "lorem ipsum dolor sit amet",
            "date": "24/05/2021 17:33"
        },
        {
            "text": "lorem ipsum dolor sit amet",
            "date": "24/05/2021 17:34"
        },
        {
            "text": "lorem ipsum dolor sit amet",
            "date": "24/05/2021 17:35"
        }
    ]);

    function addPost(post) {
        setPostList([].concat(postList, post));
    }

    function removePost(index) {
        const array = postList;
        array.splice(index, 1);
        setPostList([].concat(array));
    }

    return(
        <SearchContext.Provider value={{
            postList,
            addPost,
            removePost
        }}>
            {children}
        </SearchContext.Provider>
    );
}
