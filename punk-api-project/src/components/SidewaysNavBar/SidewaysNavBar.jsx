import React from "react";
import "./SidewaysNavBar.scss"




const NavBar = (  { searchText, searchTextChange, fuzzySearch, fuzzySearchChange, searchResultCount} ) => {
  return (
    <>
      <div className='navbar' >
        <div className="navbar__header">Search for a beer!</div>
        <SearchBox 
          searchText={searchText}
          searchTextChange={searchTextChange}
          fuzzySearch={fuzzySearch}
          fuzzySearchChange={fuzzySearchChange}
          searchResultCount={searchResultCount}
          />
        </div>
    </>
  )
}

export default NavBar