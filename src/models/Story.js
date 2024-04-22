import Stories from "./Stories.js";

class Story{
    constructor(){
        this.id      = Stories.getAll().length + 1;
        this.title   = "";
        this.content = "";
        this.publishTime = new Date();
        this.author  = "Admin";
        this.img_src = "kebab-paysage.webp";
    }

    setStory(datas){
        this.title   = datas.title;
        this.content = datas.content;
    }


}

export default Story;