export class Diary {
    showDescription:boolean;
    constructor( public day:number,public name:string, public description:string ,public completeDate:Date)
    {
        this.showDescription=false;
    }
}
