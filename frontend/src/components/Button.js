import React from 'react';

export default function Button(props) {
    return (
      <button className="search-options-btn" onClick={props.handleClick}>
        { props.children }
      </button>
    )
}