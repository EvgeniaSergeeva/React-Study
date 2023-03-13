//import react from "react";
import './index.css';
import BlogName from '../../components/BlogName';
import Banner from '../../components/Banner';
import BlogContent from '../../components/BlogContent';
import News from '../../components/News';

const Blog =() => {
    return <div className="blog-container">
    <BlogName/>
    <Banner/>
    <BlogContent/>
    <News/>
  </div>
};




export default Blog;

