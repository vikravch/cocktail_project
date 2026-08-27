import type {CocktailShort} from "../types/CocktailShort.ts";
import {getCocktailById} from "../api/axios_cocktail_api.ts";

export async function getCocktail(id: string): Promise<CocktailShort>{
    const data = await getCocktailById(id);

    const cocktailData = data["drinks"][0];
    return ({
        id: cocktailData.idDrink,
        name: cocktailData.strDrink,
        description: cocktailData.strCategory,
        image: cocktailData.strImageSource,
    } as CocktailShort);
}
