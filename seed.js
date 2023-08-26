import seeder from "mongoose-seed";

// Connect to MongoDB via Mongoose
seeder.connect(
    "mongodb+srv://sdnbanyuroto1:sdnbanyuroto1sawangan@cluster0.tvs3mkj.mongodb.net/db_website_sekolah?retryWrites=true&w=majority",
    () => {
        // Load Mongoose models
        seeder.loadModels([
            "./models/Berita.js",
            "./models/Agenda.js",
            "./models/Foto.js",
            "./models/Prestasi.js",
            "./models/User.js",
            "./models/Video.js",
        ]);

        // Clear specified collections
        seeder.clearModels(
            ["Berita", "Agenda", "Foto", "Prestasi", "User", "Video"],
            function () {
                // Callback to populate DB once collections have been cleared
                seeder.populateModels(data, function (err, done) {
                    if (err) {
                        return console.log("Seed err", err);
                    }
                    if (done) {
                        return console.log("Seed done", done);
                    }
                    seeder.disconnect();
                });
            }
        );
    }
);
