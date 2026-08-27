import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar.tsx";
import {searchCocktails} from "../use_case/searchCocktails.ts";
import type {CocktailShort} from "../types/CocktailShort.ts";


const ListPane: React.FC = () =>{

  const [query, setQuery] = useState<string>('');
  const [cocktailList, setCocktailList] = useState<CocktailShort[]>([]);
  function showError() {

  }

  useEffect(()=>{
    searchCocktails(query).then(setCocktailList).catch(showError);
  }, [query]);

  const handleQueryChanged = (newQuery: string)=>{
    setQuery(newQuery);
  }

  return (
  <aside className="list-pane">
    <div className="list-header">
      <div className="list-title-row">
        <h2>Margarita Classics</h2>
        <span className="material-symbols-outlined icon">filter_list</span>
      </div>
      <SearchBar currentSearchText={query} onSearchTextChanged={handleQueryChanged}/>
    </div>
    <div className="list-items">
      {
        cocktailList.map((cocktail:CocktailShort)=> (
          <div className="list-item-wrapper" key={cocktail.id}>
            <div className="list-item">
              <img className="item-image"
                   src={cocktail.image}
                   alt="Smashed Watermelon"/>
              <div className="item-content">
                <h3 className="item-title">{cocktail.name}</h3>
                <p className="item-subtitle">{cocktail.description}</p>
              </div>
            </div>
          </div>

        ))
      }
      <div className="list-item-wrapper">
        <div className="list-item active">
          <img className="item-image"
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsYD8VYW01ATm_2m1a2uMJtKSCpZE6QEY7m3Ryn9n0mLFGK_ZZJVnr2eq-mkE7_Tf9Eo9x-cVYB8vMC-2AUroOXmMJ4j-Mt-BIEItV7KYb9bykK7qYU2JoKKS6tOk8nTRhBk31NKWFwLkpx9ePpVljV-MK5NG9Y79rYtiNWP9LgfMV3Ak31jcXRZQyUgs2YSly94OIzFNPA1IhTs4cXdB9vkgmEgBkK_A5G68x1YI5ocnEFHMs0_9FT7HQZUTfZSjzT1Ilmw80MtJD"
               alt="Margarita"/>
          <div className="item-content">
            <h3 className="item-title">Margarita</h3>
            <p className="item-subtitle">Classic summer zest</p>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="list-item">
          <img className="item-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZe4nH8QBBT1fPf8vwrk24jHW5gSxKbpO8C3fTk6PNUvNoMz9MzjlMJHQsF1KXJ53-ySX3USLpdB6hPWq8rSP2ae4hgnBFmXWmd9I8kEOh-1a8dHsUL8Ax48gqDDy9ccieBAyJu-fefqULJzTBO7J4_cqNG9lcJ24OwKQHKbLaw6miQqbc4KbZwXx2qU-ybwF9RPNxF4A9IwaAsHcfd0hZEaQ--aleuCsCOidLOV_clFHLuHNSrX2OYDnhJAv99EbgjYK9PBm7fV8Y" alt="Blue Margarita" />
          <div className="item-content">
            <h3 className="item-title">Blue Margarita</h3>
            <p className="item-subtitle">Electric & tropical</p>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="list-item">
          <img className="item-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5rhTo8H7V3QzmGpfV0bc23F757wfnskDkhiDG7RaNV8XFZHBGWY4HQqy2CzoMafcMsNrhWMf9s8VdlXZzDQBV7thvPYG9fpj-3juT4moxnyoIL0IqceXZURBfNGmhbJHjiSUvhUZ730lEXnYVWpE9D-zIYv31JXEuEBXzuNUCAYLt_O58tkIgo528J_WhwDdly_HpEcTNxZxg4b06qGqHX1g3-8hQuRzI37hUDGGHs6sHS6FApOaT-QCNASee03I8PQuS7G8O6_SO" alt="Tommy's Margarita" />
          <div className="item-content">
            <h3 className="item-title">Tommy's Margarita</h3>
            <p className="item-subtitle">Agave rich & smooth</p>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="list-item">
          <img className="item-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBbFu0TNv_80p3pW04K9wjs6CGwc79lelvaaQZNUsTAnpeMb4c3TYFTJ_aYBIqVroIxr0FGyikikcPTDp4zpWwynWfsKeFitwQy5Y3tkT23sqli7djEc2GEy8eEqa8tWMQ547N_lgy1210agSZmPamVGt2PFP4Ffsfm4aPa1gVMjKUv5ObHLOE04DXkzt0XXCwyTrqZ8j7YDHWIirmZneK60YtV1PRff-7YaxVh5_pDFDjVopqVsepdvUCZQtzn7T8aO7RHEBAHlw" alt="Whitecap Margarita" />
          <div className="item-content">
            <h3 className="item-title">Whitecap Margarita</h3>
            <p className="item-subtitle">Creamy coconut finish</p>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="list-item">
          <img className="item-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAfbK-duTdm68RnT8RxBNszvP9ZlTptmsfROalUdtDmZKJEohIQakqDqJkiY8FMcgBA1-I4Db9C1qX1Y2ttGygkzlqhGi9stm6IWKw62Z81R9yX_EoX4aLkVTdMWikQPwgJ6ch_UD-H-gE_R9DFUDu39NubBtjGsyi7hE1N9KMmScfzUgF8yDtBkhCtulmfg61_zRfN3Ev2pXIq9T6xbVe2V8sYcN6OdNV78ywyon86O4yTSgPwH7l06zVT4rflFpT7mlp84dUQRyB" alt="Strawberry Margarita" />
          <div className="item-content">
            <h3 className="item-title">Strawberry Margarita</h3>
            <p className="item-subtitle">Sweet summer berries</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
)};

export default ListPane;
