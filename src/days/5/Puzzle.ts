import Stack from '../../../node_modules/ts-data.stack/stack';
import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    return;
    const lines = this.input.split('\n');
    var boxes = this.createDrawingArray(lines);

    for (let i = 0; i < lines.length; i++) {
      const element = lines[i];
      if(/^move.*$/.test(element)) { // if is move line
        const actions: number[] = element.match(/\d+/g).map(el => Number(el)); // amount, before, after
        this.moveBoxes(boxes, actions);
      }
    }

    let result = '';
    for (let i = 0; i < boxes.length; i++) {
      result += boxes[i].peek();
    }

    return result;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    const lines = this.input.split('\n');
    var boxes = this.createDrawingArray(lines);

    for (let i = 0; i < lines.length; i++) {
      const element = lines[i];
      if(/^move.*$/.test(element)) { // if is move line
        const actions: number[] = element.match(/\d+/g).map(el => Number(el)); // amount, before, after
        boxes = this.moveBoxes9001(boxes, actions);
      }
    }

    let result = '';
    for (let i = 0; i < boxes.length; i++) {
      result += boxes[i].peek();
    }

    return result;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }

  private createDrawingArray(lines: string[]): Array<Stack<string>> {
    const size = Math.ceil(lines[0].length / 4);
    
    let boxes = new Array(size).fill(null).map(() => new Stack<string>());

    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      
      if(/\d/.test(line)) continue; // if line has number

      for(let j = 0; j < line.length + 1 / 4; j = j + 4) {
        const characters = line.substring(j, j+2);
        const char = characters.charAt(1);
        console.log(char);
        console.log(j / 4);
        
        if(/^[a-zA-Z]$/.test(char)) { // check if char exists and is not space
          boxes[j / 4].push(char);
        }
      }
    }

    for (let i = 0; i < boxes.length; i++) {
      console.log(JSON.stringify(boxes[i]));
    }

    return boxes;
  }

  private moveBoxes(boxes: Stack<string>[], actions: number[]) { // amount, before, after
    for (let i = 0; i < actions[0]; i++) {
      let temp = boxes[actions[1] - 1].pop();     
      boxes[actions[2] - 1].push(temp);
    }
  }

  private moveBoxes9001(boxes: Stack<string>[], actions: number[]) {
    let items = [];
    for (let i = 0; i < actions[0]; i++) {
      items.push(boxes[actions[1] - 1].pop());     
    }
    
    for (let i = items.length - 1; i >= 0; i--) {
      boxes[actions[2] - 1].push(items[i]);
    }

    return boxes;
  }
}
