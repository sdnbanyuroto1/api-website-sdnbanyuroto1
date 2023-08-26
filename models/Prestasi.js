import mongoose from "mongoose";
const { Schema } = mongoose;

const prestasiSchema = new Schema({
    judul: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Prestasi", prestasiSchema);
