import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String,
     required: true
     },
  description: {
     type: String

   },
  videoUrl: {
     type: String,
     required: true
     },
  thumbnailUrl: {
     type: String

   },
  user: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "User",
      required: true },
  views: {
     type: Number,
      default: 0
     },
  likes: [{
     type: mongoose.Schema.Types.ObjectId,
      ref: "User"
     }],
  dislikes: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User"
     }]
}, { timestamps: true });

export const Video = mongoose.model("Video", videoSchema);
