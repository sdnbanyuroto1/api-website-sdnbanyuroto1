import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import adminRouter from "./routes/admin.js";
import indexRouter from "./routes/index.js";
import apiRouter from "./routes/api.js";
import mongoose from "mongoose";
import methodOverride from "method-override";
import session from "express-session";
import flash from "connect-flash";
const app = express();
app.use(cors());
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Berhasil terhubung ke MongoDB Atlas");
    })
    .catch((error) => {
        console.error("Gagal terhubung ke MongoDB Atlas:", error);
    });
app.set("view engine", "ejs");
app.set("views", "views");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(methodOverride("_method"));
app.use(
    session({
        secret: "sdnbanyuroto1sawangan",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 3600000,
        },
    })
);
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
    "/sb-admin-2",
    express.static(join(__dirname, "node_modules", "startbootstrap-sb-admin-2"))
);

app.use("/admin", adminRouter);
app.use("/", indexRouter);
app.use("/api/v1", apiRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
