import {gql} from "apollo-server-express";


export const userTypeDefs = gql`
type User {
_id:ID!
username:String!
email:String!
avatar:String
subscribers:Int
subscribedUsers:[ID]
createdAt:String
}

type AuthPayLoad {
token:String!
user:User!
}

extend type Query {
me:User 
}

extend type Mutation{

register(username:String!,email:String!,password:String!):AuthPayLoad
login(email:String!,password:String!):AuthPayLoad
}`
;