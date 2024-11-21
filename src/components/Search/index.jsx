import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const searcher = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value); 
    };

    return (
        <div className="container-busqueda">
            <input 
                value={search} 
                onChange={searcher} 
                type="text" 
                placeholder="Búsqueda" 
                className="input-busqueda"
            />
        </div>
    );
}

export default Search;
