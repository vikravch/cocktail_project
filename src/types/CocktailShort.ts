export type CocktailShort = {
    id: string;
    name: string;
    description?: string;
    image: string;
}

export type CocktailResponseDTO = {
    drinks: CocktailDTO[]
}

export type CocktailDTO = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strImageSource: string;
}


// DTO - data transfer object
