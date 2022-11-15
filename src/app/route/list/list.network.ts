import {gql} from "apollo-angular";

export const listQuery = gql`
  query ListQuery {
    boxes(free: false, purchasable: true, openable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;
