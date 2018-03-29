import React, { Component } from 'react';

class Cards extends Component{
  render(){
    return(
      <div className='card--'>
        <img src={this.props.imageUrl}
             alt='card'/>
      </div>
    );
  }
}

export default Cards;