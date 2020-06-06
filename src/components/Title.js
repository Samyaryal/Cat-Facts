import React from 'react';
import cat from './cat.png';

const Title = () => {
    return (
        <div className="container">
        <h1 className="display-3">Cat Fact</h1>
        <img src={cat} alt="cat_pic" className="card-img-top" style={{height: '290px', width: '380px'}} />
        <p className="lead">Here are some interesting facts about cat</p>
        
      </div>
    )
}

export default Title;