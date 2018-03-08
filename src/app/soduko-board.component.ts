import {Component} from '@angular/core';

@Component({
  selector: 'pm-board',
  templateURL: './soduko-board.component.html'
})

export class SodukoBoard{
  board: number[]= [
  [0, 0, 6, 0, 0, 8, 5, 0, 0],
  [0, 0, 0, 0, 7, 0, 6, 1, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 9, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 8, 0, 0],
  [4, 0, 0, 5, 3, 0, 0, 0, 0],
  [1, 0, 7, 0, 5, 3, 0, 0, 0],
  [0, 5, 0, 0, 6, 4, 0, 0, 0],
  [3, 0, 0, 1, 0, 0, 0, 6, 0]
]

}
