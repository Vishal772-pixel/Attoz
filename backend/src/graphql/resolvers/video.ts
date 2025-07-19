import {Video} from "../../models/Video";


export const videoResolvers = {
    Query:{
        getAllVideos:async()=>await Video.find().populate("user")},

        Mutation :{
            uploadVideo:async(_:any,args:any,{user}:any)=>{
                if(!user)throw new Error("login requird");

                const newVideo= new Video ({
                    ...args,
                    user:user.id
                });
                return await newVideo.save();
            }
        }
    };
