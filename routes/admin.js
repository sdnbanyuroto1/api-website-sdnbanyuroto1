import express from "express";
import adminController from "../controllers/adminController.js";
import { upload } from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
router.get("/login", adminController.viewLogin);
router.post("/login", adminController.actionLogin);
router.use(auth);
router.get("/logout", adminController.actionLogout);

router.get("/dashboard", adminController.viewDashboard);

router.get("/berita-artikel", adminController.viewBerita);
router.post("/berita-artikel", upload, adminController.addBerita);
router.put("/berita-artikel", upload, adminController.editBerita);
router.delete("/berita-artikel/:id", upload, adminController.deleteBerita);

// Endpoint Agenda
router.get("/agenda", adminController.viewAgenda);
router.post("/agenda", upload, adminController.addAgenda);
router.put("/agenda", upload, adminController.editAgenda);
router.delete("/agenda/:id", upload, adminController.deleteAgenda);

// Endpoint prestasi
router.get("/prestasi", adminController.viewPrestasi);
router.post("/prestasi", upload, adminController.addPrestasi);
router.put("/prestasi", upload, adminController.editPrestasi);
router.delete("/prestasi/:id", upload, adminController.deletePrestasi);

// Endpoint foto
router.get("/foto", adminController.viewFoto);
router.post("/foto", upload, adminController.addFoto);
router.put("/foto", upload, adminController.editFoto);
router.delete("/foto/:id", upload, adminController.deleteFoto);

// Endpoint Video
router.get("/video", adminController.viewVideo);
router.post("/video", adminController.addVideo);
router.put("/video", adminController.editVideo);
router.delete("/video/:id", adminController.deleteVideo);

export default router;
