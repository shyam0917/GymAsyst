import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { AppConfig } from './../config/app-config.constants';
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  getExercises(){
		return this.http.get(AppConfig.API_HOST+'/getAllExercises').pipe(
			map(data=>
				data
				,(error:any)=>{
					error
				}));
  }


}
