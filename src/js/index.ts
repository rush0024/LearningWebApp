import axios, {
    AxiosResponse,
    AxiosError,
} from "../../node_modules/axios/index";

import { json2table100 } from "./generictable";


interface IPractiseNew{
    id : number;
    name:string;
    age:number;
    dateTime:string;
}
let buttonElement: HTMLButtonElement=<HTMLButtonElement>document.getElementById("getAll");
buttonElement.addEventListener("click",Showtable);
function Showtable():void{
    let uri: string = "https://learningdatabase.azurewebsites.net/api/LearningPractises";
    axios.get<IPractiseNew[]>(uri)
 .then(function (response: AxiosResponse<IPractiseNew[]>): void {
     let data: IPractiseNew[] = response.data;
    console.log(data);
    let result: string = json2table100(response.data);
    console.log(result);
    let getElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
    getElement.innerHTML = result;
})
.catch(function (error: AxiosError): void {
    console.log(JSON.stringify(error));
})};


let Addbutton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("add");
Addbutton.addEventListener("click",AddData);

function AddData():void{
    let addIdElement:HTMLInputElement=<HTMLInputElement>document.getElementById("addId");
    let addPressureElement:HTMLInputElement=<HTMLInputElement>document.getElementById("addPressure");
    let addHumidityElement:HTMLInputElement=<HTMLInputElement>document.getElementById("addHumidity");
    let addTemperatureElement:HTMLInputElement=<HTMLInputElement>document.getElementById("addTemperature");
    let addDateTimelement:HTMLInputElement=<HTMLInputElement>document.getElementById("addDateTime");
    let myId:number=Number(addIdElement.value);
    let myPressure:number = Number(addPressureElement.value);
    let myHumiditiy:number= Number(addHumidityElement.value);
    let myTemperature :number=Number(addTemperatureElement.value);
    let myDateTime:number = Number (addDateTimelement.value);
    let uri: string = "https://learningdatabase.azurewebsites.net/api/LearningPractises";
    axios.post<IPractiseNew>(uri, { Id: myId, Pressure: myPressure, Humidity: myHumiditiy, Temperature :myTemperature, DateTime:myDateTime })
        .then((response: AxiosResponse) => { console.log("response " + response.status + " " + response.statusText); })
        .catch((error: AxiosError) => { console.log(error); });
}



let ByIdElement:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getById");
 ByIdElement.addEventListener("click",getbyid);
  function getbyid():void{
    let inputIdElement: HTMLInputElement=<HTMLInputElement>document.getElementById("inputId");
    // let outputResultElement:HTMLDivElement=<HTMLDivElement>document.getElementById("outputResult");
    let Id:number=Number(inputIdElement.value);
    let uri: string = "https://learningdatabase.azurewebsites.net/api/LearningPractises/" + Id;
    axios.get<IPractiseNew>(uri)
    .then(function (response: AxiosResponse<IPractiseNew>): void {
        let data: IPractiseNew = response.data;
       console.log(data);
    //    let result: string = JSON.stringify(response.data);
    let result: string = data.id+" "+data.name+" "+ data.age +"   "+ data.dateTime;
       console.log(result);
    let outputResultElement: HTMLDivElement = <HTMLDivElement>document.getElementById("outputResult");
     outputResultElement.innerHTML = result;
   })
   .catch(function (error: AxiosError): void {
       console.log(JSON.stringify(error));
   })};
  