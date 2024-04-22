import express from "express";
import path from "path";

import router from "./router/index.routes.js";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "/src/views"));

app.use(express.static(path.join(process.cwd(), "/public")));
app.use(express.urlencoded({ extended: false }));

// Routes
// on délègue la gestion des routes à un objet optimiser pour ça
// utilisation d'un middleware pour appeler le router(l'objet qui gère les routes)
app.use(router);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
