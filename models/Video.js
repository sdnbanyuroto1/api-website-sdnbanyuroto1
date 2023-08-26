import mongoose from "mongoose";
const { Schema } = mongoose;

const videoSchema = new Schema({
    link: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Video", videoSchema);
