import React from 'react';
import './index.css';
import PropTypes from 'prop-types';



const Main =(props) => {
    const{blogContainerName, blogItemContainer, blogName, blogItems,blogItemElems} = props
    return <div className={blogContainerName}>
        
    <div className={blogItemContainer}></div>
    <p>{blogName}</p>
    <div className={blogItems}>
    {blogItemElems && blogItemElems.map((headerElem) => <div className={`${blogContainerName}-elem`} key={headerElem}>{headerElem}</div>)}
    </div>

</div>
};
Main.propTypes = {
    blogContainerName: PropTypes.string,
    blogItemContainer : PropTypes.string,
    blogName: PropTypes.string.isRequired, 
    blogItems : PropTypes.string,
    blogItemElems : PropTypes.array
}



  export default Main;
