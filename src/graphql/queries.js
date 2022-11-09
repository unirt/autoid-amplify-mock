/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo1 = /* GraphQL */ `
  query GetTodo1($id: ID!) {
    getTodo1(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodo1s = /* GraphQL */ `
  query ListTodo1s(
    $filter: ModelTodo1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo2 = /* GraphQL */ `
  query GetTodo2($id: ID!) {
    getTodo2(id: $id) {
      id
      name
      description
    }
  }
`;
export const listTodo2s = /* GraphQL */ `
  query ListTodo2s(
    $filter: ModelTodo2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
