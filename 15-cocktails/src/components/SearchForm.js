import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const search = React.useRef("");
  const searchCocktail =() =>{
    setSearchTerm(search.current.value)
  }
  React.useEffect(()=>{
    search.current.focus()
  },[])
  const handleSubmit = e =>{
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="na,e">Search your favourite cocktail</label>
          <input type="text" id="name" ref={search} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
}; 

export default SearchForm;
