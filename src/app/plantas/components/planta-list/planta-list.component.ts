import { Component , OnInit} from '@angular/core';
import { PlantaServiceService } from 'src/app/services/planta-service.service';
import { Planta } from 'src/app/models/planta';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit  {

  plantas : Array<Planta> = [];
  interior : number = 0;
  exterior: number = 0;

  constructor(private plantaService: PlantaServiceService) { }

  ngOnInit(): void {
    this.getPlantas();
  }


  getPlantas():void{
    this.plantaService.getPlantas().subscribe(plants =>{
      console.log(plants);
      this.plantas = plants;

      this.plantas.forEach(plant =>{
        if(plant.tipo == 'Interior'){
          this.interior +=1;
        }else{
          this.exterior +=1;
        }
      });
    });
  }

}
