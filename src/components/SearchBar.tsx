import React from 'react';

type Props = {
    onSearchTextChanged: (newQuery: string) => void;
    currentSearchText: string;
}

const SearchBar: React.FC<Props> = (
    {onSearchTextChanged, currentSearchText}
) => {
    return (
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search cocktail"
                   onChange={
                        event => {
                        onSearchTextChanged(event.target.value);
                        }}
                   value={currentSearchText}/>
            <span className="material-symbols-outlined search-icon">search</span>
        </div>
    );
}

export default SearchBar;
