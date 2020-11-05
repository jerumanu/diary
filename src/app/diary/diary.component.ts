import { Component, OnInit } from '@angular/core';
import { Diary } from "../diary";
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
diarys : Diary[] = [
 new Diary (1,"cooking1 ", "cooking fish1" ,new Date(2020,1,23)),
 new Diary(2,"cooking2","cooking fish2",new Date(2020,1,23)),
 new Diary(3,"cooking3" ,"cooking fish3",new Date(2020,1,23)),
 new Diary(4,"cooking4" ,"cooking fish4",new Date(2020,1,23)),
 new Diary (5,"cooking5" ,"cooking fish5",new Date(2020,1,23)),
 new Diary (6,"cooking6","cooking fish6",new Date(2020,1,23)),
];
addNewDiary(diary){
  let diaryLength = this.diarys.length;
  diary.day = diaryLength+1;
  diary.completeDate = new Date(diary.completeDate)
  this.diarys.push(diary)
}
toggleDetails(index){
  this.diarys[index].showDescription= !this.diarys[index].showDescription;
}
deleteDiary(isComplete,index){
  if(isComplete){
    let toDelete =confirm(`are sure you want to delete ${this.diarys[index].name}?`)
    if (toDelete) {
      this.diarys.splice(index,1);
    }

  }
}
  constructor( ) { }

  ngOnInit( ) {
  }

}
