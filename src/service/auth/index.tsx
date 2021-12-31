import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(input: { name: $name, email: $email, password: $password }) {
      token
    }
  }
`;

// const DESTROY_USER = gql`
//   mutation destroySeft {
//     success
//   }
// `;

export default ADD_USER;
