import Prestasi from "../models/Prestasi.js";
import Berita from "../models/Berita.js";
import Agenda from "../models/Agenda.js";
import Foto from "../models/Foto.js";
import Video from "../models/Video.js";

const landingPage = async (req, res) => {
    try {
        const prestasi = await Prestasi.find().limit(4).sort({ _id: -1 });
        const berita = await Berita.find().limit(3).sort({ _id: -1 });
        const agenda = await Agenda.find().limit(3).sort({ _id: -1 });
        res.status(200).json({ prestasi, berita, agenda });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const prestasiPage = async (req, res) => {
    try {
        const prestasi = await Prestasi.find().sort({ _id: -1 });
        res.status(200).json({ prestasi });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const fotoPage = async (req, res) => {
    try {
        const foto = await Foto.find().sort({ _id: -1 });
        res.status(200).json({ foto });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const videoPage = async (req, res) => {
    try {
        const video = await Video.find().sort({ _id: -1 });
        res.status(200).json({ video });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const beritaPage = async (req, res) => {
    try {
        const berita = await Berita.find().sort({ _id: -1 });
        res.status(200).json({ berita });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const agendaPage = async (req, res) => {
    try {
        const agenda = await Agenda.find().sort({ _id: -1 });
        res.status(200).json({ agenda });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const detailPageBerita = async (req, res) => {
    try {
        const { id } = req.params;
        const berita = await Berita.findOne({ _id: id });
        res.status(200).json({ berita });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const detailPageAgenda = async (req, res) => {
    try {
        const { id } = req.params;
        const agenda = await Agenda.findOne({ _id: id });
        res.status(200).json({ agenda });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default {
    landingPage,
    prestasiPage,
    fotoPage,
    videoPage,
    beritaPage,
    agendaPage,
    detailPageBerita,
    detailPageAgenda,
};
