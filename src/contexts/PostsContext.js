import { createContext, useState } from "react";

export const SearchContext = createContext({});

export default function PostsProvider({ children }) {
    const [postList, setPostList] = useState([
        {
            "text": "lorem ipsum dolor sit amet",
            "date": "moment().format('DD/MM/YYYY HH:mm')"
        }
    ]);



    return(
        <SearchContext.Provider value={{
            postList,
            setPostList
        }}>
            {children}
        </SearchContext.Provider>
    );
}
