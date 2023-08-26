import Video from "../models/Video.js";
import Prestasi from "../models/Prestasi.js";
import Foto from "../models/Foto.js";
import fs from "fs-extra";
import path from "path";
import Agenda from "../models/Agenda.js";
import format from "date-fns/format/index.js";
import idLocale from "date-fns/locale/id/index.js";
import Berita from "../models/Berita.js";
import User from "../models/User.js";

const viewDashboard = async (req, res) => {
    try {
        const agenda = await Agenda.find();
        const berita = await Berita.find();
        const foto = await Foto.find();
        const prestasi = await Prestasi.find();
        const video = await Video.find();
        const users = await User.find();
        const user = await User.findOne({
            username: req.session.user.username,
        });
        res.render("admin/dashboard/view_dashboard", {
            title: "SDN BANYUROTO 1 | Dashboard",
            user: user,
            agenda,
            berita,
            foto,
            prestasi,
            video,
            users,
        });
    } catch (error) {}
};
const viewLogin = (req, res) => {
    try {
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        if (req.session.user === null || req.session.user === undefined) {
            return res.render("index", {
                title: "SDN BANYUROTO 1 | Login",
                alert,
            });
        } else {
            return res.redirect("/admin/dashboard");
        }
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        return res.redirect("/admin/login");
    }
};

const actionLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user) {
            console.log("user tidak ada");
            req.flash("alertMessage", "User yang anda masukkan tidak ada");
            req.flash("alertStatus", "danger");
            return res.redirect("/admin/login");
        }
        if (user.password !== password) {
            console.log("password salah");
            req.flash("alertMessage", "Passwrod tidak sesuai");
            req.flash("alertStatus", "danger");
            return res.redirect("/admin/login");
        }

        req.session.user = {
            id: user.id,
            username: user.username,
        };
        res.redirect("/admin/dashboard");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        return res.redirect("/admin/login");
    }
};

const actionLogout = (req, res) => {
    req.session.destroy();
    res.redirect("/admin/login");
};

const viewBerita = async (req, res) => {
    try {
        const beritas = await Berita.find();
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        const formattedBeritas = beritas.map((berita) => ({
            ...berita._doc,
            tanggal_publikasi: format(
                new Date(berita.tanggal_publikasi),
                "dd MMMM yyyy, HH:mm",
                {
                    locale: idLocale,
                }
            ),
        }));
        const user = await User.findOne({
            username: req.session.user.username,
        });
        res.render("admin/berita/view_berita", {
            title: "SDN BANYUROTO 1 | Berita dan Artikel",
            alert,
            beritas: formattedBeritas,
            user: user.username,
        });
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/agenda");
    }
};
const addBerita = async (req, res) => {
    try {
        const { judul, deskripsi, jenis } = req.body;
        await Berita.create({
            judul: judul,
            jenis: jenis,
            deskripsi: deskripsi,
            imageUrl: `images/${req.file.filename}`,
        });
        req.flash("alertMessage", "Seccess Add Berita atau Artikel");
        req.flash("alertStatus", "success");
        res.redirect("/admin/berita-artikel");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/berita-artikel");
    }
};
const editBerita = async (req, res) => {
    try {
        const { id, judul, deskripsi, jenis } = req.body;
        const berita = await Berita.findOne({ _id: id });
        if (req.file === undefined) {
            berita.judul = judul;
            berita.jenis = jenis;
            berita.deskripsi = deskripsi;

            await berita.save();
            req.flash("alertMessage", "Seccess Update berita");
            req.flash("alertStatus", "success");
            res.redirect("/admin/berita-artikel");
        } else {
            await fs.unlink(path.join(`public/${berita.imageUrl}`));
            berita.judul = judul;
            berita.jenis = jenis;
            berita.deskripsi = deskripsi;
            berita.imageUrl = `images/${req.file.filename}`;
            await berita.save();
            req.flash("alertMessage", "Seccess Update berita");
            req.flash("alertStatus", "success");
            res.redirect("/admin/berita-artikel");
        }
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/berita-artikel");
    }
};

const deleteBerita = async (req, res) => {
    try {
        const { id } = req.params;
        const berita = await Berita.findOne({ _id: id });
        await fs.unlink(path.join(`public/${berita.imageUrl}`));
        await berita.deleteOne({ _id: id });
        req.flash("alertMessage", "Seccess Delete berita");
        req.flash("alertStatus", "success");
        res.redirect("/admin/berita-artikel");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/berita-artikel");
    }
};

const viewAgenda = async (req, res) => {
    try {
        const agendas = await Agenda.find();
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        const formattedAgendas = agendas.map((agenda) => ({
            ...agenda._doc,
            jadwal: format(new Date(agenda.jadwal), "dd MMMM yyyy, HH:mm", {
                locale: idLocale,
            }),
            tanggal_publikasi: format(
                new Date(agenda.tanggal_publikasi),
                "dd MMMM yyyy, HH:mm",
                {
                    locale: idLocale,
                }
            ),
        }));
        const user = await User.findOne({
            username: req.session.user.username,
        });
        res.render("admin/agenda/view_agenda", {
            title: "SDN BANYUROTO 1 | Agenda",
            alert,
            agendas: formattedAgendas,
            user: user.username,
        });
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/agenda");
    }
};

const addAgenda = async (req, res) => {
    try {
        const { judul, deskripsi, jadwal } = req.body;
        await Agenda.create({
            judul: judul,
            deskripsi: deskripsi,
            jadwal: jadwal,
            imageUrl: `images/${req.file.filename}`,
        });
        req.flash("alertMessage", "Seccess Add Agenda");
        req.flash("alertStatus", "success");
        res.redirect("/admin/agenda");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/agenda");
    }
};

const editAgenda = async (req, res) => {
    try {
        const { id, judul, deskripsi, jadwal } = req.body;
        const agenda = await Agenda.findOne({ _id: id });
        if (req.file === undefined) {
            agenda.judul = judul;
            agenda.deskripsi = deskripsi;
            agenda.jadwal = jadwal;
            await agenda.save();
            req.flash("alertMessage", "Seccess Update agenda");
            req.flash("alertStatus", "success");
            res.redirect("/admin/agenda");
        } else {
            await fs.unlink(path.join(`public/${agenda.imageUrl}`));
            agenda.judul = judul;
            agenda.deskripsi = deskripsi;
            agenda.jadwal = jadwal;
            agenda.imageUrl = `images/${req.file.filename}`;
            await agenda.save();
            req.flash("alertMessage", "Seccess Update agenda");
            req.flash("alertStatus", "success");
            res.redirect("/admin/agenda");
        }
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/agenda");
    }
};

const deleteAgenda = async (req, res) => {
    try {
        const { id } = req.params;
        const agenda = await Agenda.findOne({ _id: id });
        await fs.unlink(path.join(`public/${agenda.imageUrl}`));
        await agenda.deleteOne({ _id: id });
        req.flash("alertMessage", "Seccess Delete agenda");
        req.flash("alertStatus", "success");
        res.redirect("/admin/agenda");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/agenda");
    }
};

const viewPrestasi = async (req, res) => {
    try {
        const prestasis = await Prestasi.find();
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        const user = await User.findOne({
            username: req.session.user.username,
        });
        res.render("admin/prestasi/view_prestasi", {
            title: "SDN BANYUROTO 1 | Prestasi",
            alert,
            prestasis,
            user: user.username,
        });
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/prestasi");
    }
};
const addPrestasi = async (req, res) => {
    try {
        const { judul, deskripsi, image } = req.body;
        await Prestasi.create({
            judul: judul,
            deskripsi: deskripsi,
            imageUrl: `images/${req.file.filename}`,
        });
        req.flash("alertMessage", "Seccess Add Prestasi");
        req.flash("alertStatus", "success");
        res.redirect("/admin/prestasi");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/prestasi");
    }
};

const editPrestasi = async (req, res) => {
    try {
        const { id, judul, deskripsi } = req.body;
        const prestasi = await Prestasi.findOne({ _id: id });
        if (req.file === undefined) {
            prestasi.judul = judul;
            prestasi.deskripsi = deskripsi;
            await prestasi.save();
            req.flash("alertMessage", "Seccess Update Prestasi");
            req.flash("alertStatus", "success");
            res.redirect("/admin/prestasi");
        } else {
            await fs.unlink(path.join(`public/${prestasi.imageUrl}`));
            prestasi.judul = judul;
            prestasi.deskripsi = deskripsi;
            prestasi.imageUrl = `images/${req.file.filename}`;
            await prestasi.save();
            req.flash("alertMessage", "Seccess Update Prestasi");
            req.flash("alertStatus", "success");
            res.redirect("/admin/prestasi");
        }
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/prestasi");
    }
};

const deletePrestasi = async (req, res) => {
    try {
        const { id } = req.params;
        const prestasi = await Prestasi.findOne({ _id: id });
        await fs.unlink(path.join(`public/${prestasi.imageUrl}`));
        await prestasi.deleteOne({ _id: id });
        req.flash("alertMessage", "Seccess Delete Prestasi");
        req.flash("alertStatus", "success");
        res.redirect("/admin/prestasi");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/prestasi");
    }
};

const viewFoto = async (req, res) => {
    try {
        const fotos = await Foto.find();
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        const user = await User.findOne({
            username: req.session.user.username,
        });
        res.render("admin/foto/view_foto", {
            title: "SDN BANYUROTO 1 | Galeri Foto",
            alert,
            fotos,
            user: user.username,
        });
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/foto");
    }
};

const addFoto = async (req, res) => {
    try {
        const { judul, deskripsi, image } = req.body;
        await Foto.create({
            judul: judul,
            deskripsi: deskripsi,
            imageUrl: `images/${req.file.filename}`,
        });
        req.flash("alertMessage", "Seccess Add Foto Sekolah");
        req.flash("alertStatus", "success");
        res.redirect("/admin/foto");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/foto");
    }
};

const editFoto = async (req, res) => {
    try {
        const { id, judul, deskripsi } = req.body;
        const foto = await Foto.findOne({ _id: id });
        if (req.file === undefined) {
            foto.judul = judul;
            foto.deskripsi = deskripsi;
            await foto.save();
            req.flash("alertMessage", "Seccess Update foto");
            req.flash("alertStatus", "success");
            res.redirect("/admin/foto");
        } else {
            await fs.unlink(path.join(`public/${foto.imageUrl}`));
            foto.judul = judul;
            foto.deskripsi = deskripsi;
            foto.imageUrl = `images/${req.file.filename}`;
            await foto.save();
            req.flash("alertMessage", "Seccess Update foto");
            req.flash("alertStatus", "success");
            res.redirect("/admin/foto");
        }
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/foto");
    }
};

const deleteFoto = async (req, res) => {
    try {
        const { id } = req.params;
        const foto = await Foto.findOne({ _id: id });
        await fs.unlink(path.join(`public/${foto.imageUrl}`));
        await foto.deleteOne({ _id: id });
        req.flash("alertMessage", "Seccess Delete foto");
        req.flash("alertStatus", "success");
        res.redirect("/admin/foto");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/foto");
    }
};

const viewVideo = async (req, res) => {
    try {
        const videos = await Video.find();
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        const user = await User.findOne({
            username: req.session.user.username,
        });
        res.render("admin/video/view_video", {
            videos,
            alert,
            title: "SDN BANYUROTO 1 | Galeri Video",
            user: user.username,
        });
    } catch (error) {
        res.redirect("/admin/video");
    }
};
const addVideo = async (req, res) => {
    try {
        const { linkyt } = req.body;
        await Video.create({ link: linkyt });
        req.flash("alertMessage", "Seccess Add Video");
        req.flash("alertStatus", "success");
        res.redirect("/admin/video");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/video");
    }
};
const editVideo = async (req, res) => {
    try {
        const { id, linkyt } = req.body;
        const video = await Video.findOne({
            _id: id,
        });
        video.link = linkyt;
        await video.save();
        req.flash("alertMessage", "Seccess Update Video");
        req.flash("alertStatus", "success");
        res.redirect("/admin/video");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/video");
    }
};
const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        await Video.deleteOne({ _id: id });
        req.flash("alertMessage", "Seccess Delete Video");
        req.flash("alertStatus", "success");
        res.redirect("/admin/video");
    } catch (error) {
        req.flash("alertMessage", `${error.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/admin/video");
    }
};

export default {
    viewLogin,
    actionLogin,
    actionLogout,
    viewDashboard,
    viewBerita,
    addBerita,
    editBerita,
    deleteBerita,
    viewAgenda,
    addAgenda,
    editAgenda,
    deleteAgenda,
    viewPrestasi,
    addPrestasi,
    editPrestasi,
    deletePrestasi,
    viewFoto,
    addFoto,
    editFoto,
    deleteFoto,
    viewVideo,
    addVideo,
    editVideo,
    deleteVideo,
};
