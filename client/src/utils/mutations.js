import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!, $github: String!, $password: String!){
  addUser(name: $name, github:$github, password:$password){
    token
    users {
      name
      github
      password
      
    }
  }
  }
`;
export const ADD_PROJECT = gql`
mutation AddProject($author: String!, $title: String!, $description: String!, $respitoryLink: String!, $liveLink: String!, $image: String!) {
  addProject(author: $author, title: $title, description: $description, respitoryLink: $respitoryLink, liveLink: $liveLink, image: $image) {
    author
    title
    description
    respitoryLink
    liveLink
    image
  }
}
`;

