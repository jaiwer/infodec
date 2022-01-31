import { Component,Input,OnInit,Renderer2} from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { Perfil } from '../interfaces/interface-aws';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'infodec';
  perfil:Perfil[]=[];
  vista1:boolean=true;
  vista2:boolean=false;
  htmlStr: string = '';


 @Input() filtro:string='';

  opcionVista(index:number){
    switch(index){
      case 1:{
        this.vista1=true;
        this.vista2=false;
        break; 
      }
      case 2:{
        this.vista1=false;
        this.vista2=true;
        break; 
      }
    }
  }

  constructor(private http:ApiresponseService, private renderer: Renderer2) { }

  get respuestaApi(){
    return this.http.dataResponse
  }  

  ngOnInit(): void {
    this.http.getResponse();
  }

  all(){
   	this.perfil = this.respuestaApi;
  }

  buscar(filtro:string){

	this.perfil=this.respuestaApi.filter(item=>item.first_name.toLowerCase()==filtro.toLowerCase().trim());
  }

}
