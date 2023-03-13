import { gql } from '@apollo/client';

export const GET_IMAGE_CAROUSEL_BY_TITLE = gql`
  query MyQuery($title: String!) {
    imageCarousel(where: { title: $title }) {
      id
      slides {
        id
        title
        image {
          url
        }
      }
    }
  }
`;
