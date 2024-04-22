import express from 'express';

import { home_view, story_view, admin_view, not_found_view } from '../controllers/views.js';
import { add } from '../controllers/story.js';

// l'objet de router est créer par une fonctionnalité d'express "Router()"
const router = express.Router();

// on déclare les routes on coupe la fonction de callback qui elle va se retrouver être gérer dans le dossier controller en étant stocké dans une constante, c'est cette dernière qu'on importe en second paramètre
router.get("/", home_view);
router.get("/story/:id", story_view);

router.get("/admin", admin_view);

router.post("/story/add", add);

router.get("*", not_found_view);

export default router;