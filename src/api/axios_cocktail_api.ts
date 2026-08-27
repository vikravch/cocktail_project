import axios from "axios";
import type {CocktailResponseDTO} from "../types/CocktailShort.ts";

const BASE_PRODUCTION_URL = "https://www.thecocktaildb.com/api/json/v1/1";
//const BASE_TEST_URL = "https://www.thecocktaildb.com/api/json/v1/1";
//const BASE_LOCAL_URL = "http://localhost:7656";

const BASE_URL = BASE_PRODUCTION_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

export const getSearchCocktail =
    async (searchQuery: string) => {
        const response = await instance.get<CocktailResponseDTO>("/search.php?s="+searchQuery);
        return response.data;
    }

// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
export const getCocktailById =
    async (id: string) => {
        const response = await instance.get<CocktailResponseDTO>(`/lookup.php?i=${id}`);
        return response.data;
}
