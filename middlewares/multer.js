import multer from "multer";
import path from "path";
import fs from "fs";

// Set storage engine
const storage = multer.diskStorage({
    destination: "public/images",
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 }, // 5 MB dalam byte
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("image");

// // Check file Type
function checkFileType(file, cb) {
    // Allowed ext
    const fileTypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extName = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb("Error: Images Only !!!");
    }
}

export { upload };
