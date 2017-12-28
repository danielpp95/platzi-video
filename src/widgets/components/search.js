import React from 'react';
import './search.css'

const Search = (props) => (
  <form 
    action="" 
    className="Search" 
    onSubmit={props.handleSubmit}
  >
    <input 
      type="text" 
      name="search"
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      className="Search-input"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search;
