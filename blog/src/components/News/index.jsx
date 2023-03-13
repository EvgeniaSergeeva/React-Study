import React from "react";
import './index.css';

const News = () => {
    const news = ['one','two','three']
    return <div className="news-content">
        <p>News</p>
     {news.map(i => <div className="news-element"></div>)}
    </div>
};

export default News;