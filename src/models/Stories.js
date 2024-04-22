import jsonfile from 'jsonfile';
import path from 'path';

const file = path.join(process.cwd(),"./src/data/stories.json");

class Stories {
    // utilisation du mot-clé static pour rendre les méthodes disponible sur la classe elle-même ( PAS d'instanciation requise ! ex:new stories)
    static getAll(){
        const stories = jsonfile.readFileSync(file);
        return stories;
    }

    // méthode statique pour récupérer une story par son id transmis en paramètre depuis le controller
    static getById(story_id){
        const id = Number(story_id);
        const stories = this.getAll(); // on récupère toutes les stories 
        const story   = stories.find((story) => story.id === id);

        return story;
    }

    // méthode statique pour ajouter une story à la liste des stories
    static add(story){
        // on récupère toutes les stories
        const stories = this.getAll();
        // on ajoute la nouvelle story à la liste
        stories.push(story);
        // on réécrit le fichier stories.json avec la nouvelle liste
        jsonfile.writeFileSync(file, stories, { spaces: 4, EOL: "\r\n"});
    }

}

export default Stories;