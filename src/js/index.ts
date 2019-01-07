import axios, {
    AxiosResponse,
    AxiosError,
} from "../../node_modules/axios/index";

interface IPrastiseNew {
    id : number;
    name:string;
    age:number;
    dateTime:string;
}

let buttonElement : HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAll");
buttonElement.addEventListener("click",Displaytable);
function Displaytable():void{
    let url : string = ""
}



