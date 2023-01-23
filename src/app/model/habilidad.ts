export class Habilidad {
    
    name:string;
    isHard:boolean;
    percentage:number;
    description:string;
    imageURL:string;
    
    constructor(name:string, isHard:boolean ,percentage:number ,description:string, imageURL:string) {
        this.name = name;
        this.percentage = percentage;
        this.isHard = isHard;
        this.description = description;
        this.imageURL = imageURL;
    }

}