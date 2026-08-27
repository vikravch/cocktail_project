import type {CocktailShort} from "../types/CocktailShort.ts";
import {getSearchCocktail} from "../api/axios_cocktail_api.ts";

export async function searchCocktails(query: string = "long"): Promise<CocktailShort[]> {
    const res = await getSearchCocktail(query);
    console.log(res);

    const resArray = res["drinks"]?.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        description: drink.strCategory,
        image: drink.strImageSource,
    }))
    console.log(resArray);
    return resArray;
}
