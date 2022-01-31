import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiresponseService {
  
  private url:string='https://hguv4se5de.execute-api.sa-east-1.amazonaws.com/produccion';
  private _resultado:any[]=[];

  get dataResponse(){
    return this._resultado
  }

  constructor( private http:HttpClient) { }

  getResponse(){
    this.http.get<any>(this.url).subscribe((resp)=>{
     this._resultado=resp
    })
  }
}
