import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../models/car";

const SERVER_API = "http://localhost:8080/api/cars"

@Injectable({
  providedIn: 'root'
})

export class CarService{
  constructor(private http: HttpClient) {
  }


  getAll(): Observable<any> {
    return this.http.get(SERVER_API);
  }


  save(brand:string, model:string, engine:string, ls:string, transmission:string, owner:string, phoneNumber:string,email:string): Observable<any>{
    const car: Car = {
      brand: brand,
      model: model,
      engine: engine,
      ls: ls,
      transmission: transmission,
      owner: owner,
      phoneNumber: phoneNumber,
      email: email
    };
    return this.http.post(SERVER_API, car)
  }


}

