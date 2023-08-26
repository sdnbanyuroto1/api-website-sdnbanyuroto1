import mongoose from "mongoose";
const { Schema } = mongoose;

const beritaSchema = new Schema({
    judul: {
        type: String,
        required: true,
    },
    jenis: {
        type: String,
        enum: ["Berita", "Artikel"],
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    tanggal_publikasi: {
        type: Date,
        default: Date.now,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Berita", beritaSchema);
