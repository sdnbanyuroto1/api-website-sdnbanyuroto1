import express from "express";
import apiController from "../controllers/apiController.js";
const router = express.Router();

router.get("/landing-page", apiController.landingPage);
router.get("/prestasi", apiController.prestasiPage);
router.get("/foto", apiController.fotoPage);
router.get("/video", apiController.videoPage);
router.get("/berita", apiController.beritaPage);
router.get("/agenda", apiController.agendaPage);

router.get("/berita/:id", apiController.detailPageBerita);
router.get("/agenda/:id", apiController.detailPageAgenda);

export default router;
