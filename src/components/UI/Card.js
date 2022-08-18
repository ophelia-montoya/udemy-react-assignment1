import React from 'react';
import './Card.css';

/* acts as a "shell" / container, i.e. replace div in ExpenseItem.js*/
const Card = (props) => {
    
    // ensures any classes passed in are added to string in addition to .card
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card