import mongoose from "mongoose";
const { Schema } = mongoose;

const agendaSchema = new Schema({
    judul: {
        type: String,
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
    jadwal: {
        type: Date,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Agenda", agendaSchema);
