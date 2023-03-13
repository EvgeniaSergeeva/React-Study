import React from "react";
import './index.css';

const BlogName = () => {
    const headerElems = ['one','two','three','four','five'];
    return <div className="blog-name">
        
        <div className="left-item"></div>
        <p>Blog name</p>
        <div className="right-item">
        {headerElems.map(headerElem => <div className="right-item-elem "></div>)}
        </div>

    </div>
};

export default BlogName;