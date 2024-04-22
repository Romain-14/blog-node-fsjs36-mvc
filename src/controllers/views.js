import Stories from "../models/Stories.js";

// fichier controller qui va gérer uniquement les vues de l'application
// de fait d'express, et l'utilisation successive des middlewares pour arriver dans ce fichier , on a accès aux objets req et res (request et response)

const home_view = (req, res) => {
	// on a besoin des données du fichier stories.json
	// on délègue cette tâche à un fichier model -> Stories
	// celui est un objet en class possédant des méthodes statiques (càd uniquement disponible sur la classe !)
	const stories = Stories.getAll();
	
	// un controller met fin au cycle de request/response
	res.render("index", {
		title: "Bienvenue sur mon blog, lisez de fantastiques récits sur mes voyages ! - Accueil",
		stories,
	});
}

const story_view = (req, res) => {	
	// comme dans home_view, on appelle une méthode statique de la classe Stories bien distincte car on veut uniquement UNE story
	const story = Stories.getById(req.params.id);
	
	res.render("story", {
		title: `bienvenue sur l'article de mes vacances en ${story.title} - Page story`,
		story,
	});
}

const admin_view = (req, res) => {
	res.render("admin", { title: "Espace administrateur" });
}

const not_found_view = (req, res) => {
	res.render("not-found", {
		title: "Perdues au fin fond d'une prairie avec quelques moutons, il n'y a pas de document ici :(",
	});
}


export { home_view, story_view, admin_view, not_found_view };