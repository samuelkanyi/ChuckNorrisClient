import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query getCategories {
    categories
  }
`;

export const RANDOM = gql`
  query getRandomJoke($category: String!) {
    joke(category: $category) {
      id
      icon_url
      url
      value
    }
  }
`;
