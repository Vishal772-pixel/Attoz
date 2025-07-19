import {gql} from "apollo-server-express";

export const videoTypeDefs=gql`
type Video {
_id:ID!
title:String!
description:String!
videoUrl:String!
thumbnailUrl:String
user:User!
createdAt:String
}

extend type Query {
getAllVideos:[Video]

}

extend type Mutation{
uploadVideo(
title:String!
description:String
videoUrl:String!
thumbnailUrl:String
):Video



}`
;