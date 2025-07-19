import express from "express";
import{ApolloServer}from "apollo-server-express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


import {typeDefs} from "./graphql/schemas";
import {resolvers} from "./graphql/resolvers";
import {authMiddleware} from "./middleware/auth";
import {buildContext} from "./types/context";

import{connectDB} from "./config/db";

import uploadRoutes from "./routes/upload";

dotenv.config();


export const startServer = async ()=>{
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(authMiddleware);
    app.use("/api/upload",uploadRoutes);

    await connectDB();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context:({req})=>buildContext(req),
    });
    await server.start();
    server.applyMiddleware({app});

    const PORT = process.env.PORT || 5000;
    app.listen(PORT,()=>
    console.log(`Server running at https://localhost:${PORT}${server.graphqlPath}`)
);
};



