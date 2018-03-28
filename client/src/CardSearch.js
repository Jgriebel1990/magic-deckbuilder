import React from './react';


const CardSearch = props => {
  const mtg = require('mtgsdk');
  const cardItem = mtg.card.where({ name: ''})
    .then(results => {
      return imageUrl
    })
  return(
    <div>
      {cardItem}
    </div>
  );
}

export default CardSearch;