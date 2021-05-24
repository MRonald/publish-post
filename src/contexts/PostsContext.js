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
            "date": "24/05/2021 17:33"
        },
        {
            "text": "lorem ipsum dolor sit amet",
            "date": "24/05/2021 17:33"
        }
    ]);

    function addPost(post) {
        console.log(post);
        const newList = postList;
        newList.push(post);
        setPostList(newList);
        console.log(postList);
    }

    return(
        <SearchContext.Provider value={{
            postList,
            addPost
        }}>
            {children}
        </SearchContext.Provider>
    );
}
