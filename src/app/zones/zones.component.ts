import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})

export class ZonesComponent implements OnInit {

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }



  showSidepanel: Boolean = false;
  
  item: string = "";

  zone1 = ['Z1','Z2','Z3','Z4','Z5','Z6','Z7','Z8','Z9','Z10'];
  zone2 = ['Z11','Z12','Z13','Z14','Z15','Z16','Z17','Z18','Z19','Z20'];
  index: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidepanel(index: any) {
    this.showSidepanel = true;
    this.item = index;
  }

  fromChild() {
    this.showSidepanel = false;
  }

}
