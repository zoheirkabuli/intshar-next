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

export const GET_ALL_PAGES = gql`
  query AllPages {
    pages {
      id
      title
      path
    }
  }
`;

export const GET_PAGE_BT_PATH = gql`
  query getPage($path: String!) {
    page(where: { path: $path }) {
      title
      content {
        text
      }
      featuredImage {
        url
      }
    }
  }
`;
