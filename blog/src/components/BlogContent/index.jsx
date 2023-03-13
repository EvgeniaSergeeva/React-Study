import React from "react";
import './index.css';

const BlogContent= () => {
    const blogs = ['one','two','three','four']
    return <div className="blog-content">
        <p>Blog</p>
     {blogs.map(blog => <div className="blog-element"></div>)}
    </div>
};

export default BlogContent;