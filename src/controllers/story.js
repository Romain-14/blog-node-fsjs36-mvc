import Stories from "../models/Stories.js";
import Story from "../models/Story.js";

const add = (req, res) => {
    // création d'un objet story 
    const newStory = new Story();
    // on met à jour les propriétés de l'objet story
    newStory.setStory(req.body);
    // on ajoute la story à la liste des stories avec la méthode statique add de la classe Stories (model)
    Stories.add(newStory);
    res.redirect("/"); // redirection vers la page d'accueil

}

// si l'application doit être améliorée avec des fonctionnalités de suppression, modification d'une story, on les mettra ici !

export { add };