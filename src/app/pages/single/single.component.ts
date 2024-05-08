import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  
constructor(private routeId:ActivatedRoute,private api:ApiService){}
products:any=""
data:any=[];
ngOnInit(){
  this.api.getdata().subscribe((res:any)=>{
    let id=this.routeId.snapshot.paramMap.get('id')
    let response=res
    let products=response.filter((e:any)=>e.id==id)
    this.data=products[0]})
}
}
