import { Component, OnInit } from '@angular/core';

import { ExerciseService } from './../../services/exercise.service';
import trainerJson from '../../../assets/json/trainers.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public exerciseData=[];
public trainerData=[];
  constructor(private exerciseService: ExerciseService ) { }

  ngOnInit() {
    this.getAllExercises();
    this.trainerData=trainerJson['trainerData'];
    this.trainerData=trainerJson['trainerData'];
  }

// get all exercises of different body parts
  getAllExercises(){
this.exerciseService.getExercises().subscribe(res=>{
if(res['data']){
  this.exerciseData=res['data'];
}
},er=>{

})
  }


}
