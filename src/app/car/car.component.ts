import {Component, OnInit} from '@angular/core';
import {Car} from "../models/car";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars: Car[] = [];

  constructor(private carService: CarService) {  }

  ngOnInit(): void {
    this.carService.getAll()
      .subscribe(data => {
        this.cars = data;
      });
  }

  save(brand: string,model: string,engine: string,ls: string,transmission: string,owner: string,phoneNumber: string,email: string){
    //let lsNumber: number = Number(ls);


    this.carService.save(brand,model,engine,ls,transmission,owner,phoneNumber,email)
      .subscribe(data => {
        this.cars.push(data);
      });
  }

}
