import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Board } from './models/board.models';
import { Column } from './models/column.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kanban';

  board: Board = new Board('Test board', [
    new Column('Ideas', [
      'Some new ideas',
      'My ideas',
      'ideas for Saturday'
    ]),
    new Column('Research', [
      'Research methods',
      'My research ideas',
      'Date for research'
    ]),
    new Column('Todo', [
      'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
    ])
  ]);


  done = [
    
  ];

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
}

