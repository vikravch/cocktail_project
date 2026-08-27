const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
// search -> search.php?s=margarita

export const getSearchCocktail =
    async (searchQuery: string) => {
        //const response = await fetch(BASE_URL+"search.php?s="+query);
        const response = await fetch(`${BASE_URL}search.php?s=${searchQuery}`);
        //return await response.json();
        const json = await response.json();
        return json;
    }

// Component => useCase (getCocktailsForSearch) => api call / localStorage request / index DB
