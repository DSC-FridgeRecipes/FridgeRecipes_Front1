import { gql } from '@apollo/client';

/* User */
export const SIGN_UP = gql`
    mutation SignUp($email: String!, $password: String!) {
        signup(
            email: $email
            password: $password
        )
    }
`

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(
            email: $email
            password: $password
        )
}
`

/* Recipe */
export const CREATE_RECIPE = gql`
    mutation CreateRecipe(
        $title: String!,
        $ingredientNameList: [String]!,
        $ingredientAmountList: [String]!,
        $content: String!
        ) {
        createRecipe(
            title: $title,
            ingredientNameList: $ingredientNameList,
            ingredientAmountList: $ingredientAmountList,
            content: $content,
    )
}
`

/* User - ingredients */
export const ADD_MY_INGREDIENT = gql`
    mutation AddMyIngredient($userId: ID!, $ingredient: String!) {
        addMyIngredient(
            userId: $userId
            ingredient: $ingredient
        )
    }
`

export const DELETE_MY_INGREDIENT = gql`
    mutation DeleteMyIngredient($userId: ID!, $ingredient: String!) {
        deleteMyIngredient(
            userId: $userId
            ingredient: $ingredient
        )
    }
`

export const DELETE_ALL_MY_INGREDIENT = gql`
    mutation DeleteAllMyIngredient($userId: ID!) {
        deleteAllMyIngredient(
            userId: $userId
        )
    }
`

/* User - recipe */
export const ADD_MY_RECIPE = gql`
    mutation AddMyRecipe($userId: ID!, $recipeId: ID!) {
        addMyRecipe(
            userId: $userId
            recipeId: $recipeId
        )
    }
`

export const DELETE_MY_RECIPE = gql`
    mutation DeleteMyRecipe($userId: ID!, $recipeId: ID!) {
        deleteMyRecipe(
            userId: $userId
            recipeId: $recipeId
        )
    }
`