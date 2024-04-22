import Stories from "../models/Stories.js";
import Story from "../models/Story.js";

const add = (req, res) => {
    const newStory = new Story();
    newStory.setStory(req.body);
    
    Stories.add(newStory);
    res.redirect("/");

}

// si l'application doit être améliorée avec des fonctionnalités de suppression, modification d'une story, on les mettra ici !

export { add };