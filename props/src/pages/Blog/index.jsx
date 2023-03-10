import React from 'react';
import './index.css';


import Main from '../../components/Main';

const Blog =()=> {
    const headerElems = ['one','two','three','four','five'];
    const blogs = ["one", "two", "three", "four"];
    const news = ['one','two','three']
    return <div className='blog-container'>
        
        <Main blogContainerName="blog-name" blogItemContainer="left-item" blogName='Blog name' blogItems='right-item'blogItemElems={headerElems}/>
        <Main blogContainerName='banner'  blogName='Full-width banner image' />
        <Main blogContainerName='blog-content'  blogName="Blog" blogItems='blog-items'blogItemElems={blogs}/>
        <Main blogContainerName='news-content'  blogName="News" blogItems='blog-items'blogItemElems={news}/>
    </div>
};
export default Blog;
