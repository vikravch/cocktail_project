import type {CocktailShort} from "../types/CocktailShort.ts";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
// search -> search.php?s=margarita

export async function searchCocktails(query: string = "long"): Promise<CocktailShort[]> {
    //const response = await fetch(BASE_URL+"search.php?s="+query);
    const response = await fetch(`${BASE_URL}search.php?s=${query}`);
    //return await response.json();
    const json = await response.json();

    const resArray = json["drinks"]?.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        description: drink.strCategory,
        image: drink.strImageSource,
    }))
    console.log(resArray);
    return resArray;
}


// Component => useCase (getCocktailsForSearch) => api call / localStorage request / index DB
