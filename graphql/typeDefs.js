import { gql } from 'apollo-server-micro';

export default gql`
  type Launch {
    id: String!
    flight_number: Int!
    name: String!
    success: Boolean
    details: String
    date_local: String!
    rocket: Rocket
    links: Links
  }

  type Rocket {
    name: String!
    first_flight: String!
    description: String!
    flickr_images: [String]
    engines: RocketEngine
  }

  type RocketEngine {
    type: String!
    version: String!
  }

  type Links {
    patch: Patch
  }

  type Patch {
    small: String
  }

  type Query {
    launches: [Launch]
    getLaunch(id: String!): Launch
  }
`;
