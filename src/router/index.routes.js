import express from 'express';
import jsonfile from 'jsonfile';

import { home_view, story_view, admin_view, not_found_view } from '../controllers/views.js';

// l'objet de router est créer par une fonctionnalité d'express "Router()"
const router = express.Router();

// on a encore besoin du fichier json ici car la route post n'est pas encore fait
// cette ligne sera également supprimé une fois la route post faite
const file = "./src/data/stories.json";

// on déclare les routes on coupe la fonction de callback qui elle va se retrouver être gérer dans le dossier controller en étant stocké dans une constante, c'est cette dernière qu'on importe en second paramètre
router.get("/", home_view);
router.get("/story/:id", story_view);

router.get("/admin", admin_view);

router.post("/story/add", (req, res) => {
	const datas = jsonfile.readFileSync(file);
	const { title, content, publishTime, author, img_src } = req.body;
	const newStories = {
	    stories: [
	        {
	            id: datas.stories.length + 1,
	            title,
	            content,
	            publishTime,
	            author,
	            img_src
	        }
	    ]
	};
	jsonfile.writeFile(file, newStories, { spaces: 4, EOL: "\r\n"}, (err) => {
	    if (err) return console.error(err);
	    res.redirect("/");
	});
});

router.get("*", not_found_view);

export default router;