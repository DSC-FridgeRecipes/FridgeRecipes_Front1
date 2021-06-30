import { gql } from '@apollo/client';

/* Recipe */
export const GET_RECIPE = gql`
    query GetRecipe($recipeId: ID!) {
        getRecipe(
            recipeId: $recipeId
        ) {
            id
            title
            ingredientNameList
            ingredientAmountList
            content
        }
    }
`

/* User - recipes */
export const GET_ALL_MY_RECIPE = gql`
    query GetAllMyRecipes($userId: ID!) {
        getAllMyRecipes(
            userId: $userId
        ) {
            id
            title
            ingredientNameList
            ingredientAmountList
            content
        }
    }
`

/* User - Ingredients */
export const GET_ALL_MY_INGREDIENTS = gql`
    query GetAllMyRecipes($userId: ID!) {
        getAllMyRecipes(
            userId: $userId
        ) {
            id
            title
            ingredientNameList
            ingredientAmountList
            content
        }
    }
`

/* Retrieved Recipe */
export const GET_RECIPES_WITH_ALL_INGREDIENTS = gql`
    query GetRecipesAllIngredients($ingredients: [String]!) {
        getRecipesWithAllIngredients(
            ingredients: $ingredients
        ) {
            id
            title
            ingredientNameList
            ingredientAmountList
            content
        }
    }
`

export const GET_RECIPES_WITH_SOME_INGREDIENTS = gql`
    query GetRecipesSomeIngredients($ingredients: [String]!) {
        getRecipesWithSomeIngredients(
            ingredients: $ingredients
        ) {
            id
            title
            ingredientNameList
            ingredientAmountList
            content
        }
    }
`