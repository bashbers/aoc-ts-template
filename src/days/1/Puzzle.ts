import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    let elves: number[] = new Array(10000).fill(0);

    const lines = this.input.split('\n');
    let elfCounter = 0;
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index];
      const calories = Number(element);      
      if(element) {
        if(elves[elfCounter] > 0) {
          elves[elfCounter] += calories;
        }else {
          elves[elfCounter] = 0;
          elves[elfCounter] += calories;
        }
      }
      else {        
        elfCounter++;
      }
    }
    
    return Math.max(...elves).toString();
  }
  public solveSecond(): string {
    let elves: number[] = new Array(10000).fill(0);

    const lines = this.input.split('\n');
    let elfCounter = 0;
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index];
      const calories = Number(element);      
      if(element) {
        if(elves[elfCounter] > 0) {
          elves[elfCounter] += calories;
        }else {
          elves[elfCounter] = 0;
          elves[elfCounter] += calories;
        }
      }
      else {        
        elfCounter++;
      }
    }

    return elves.sort((a,b) => b-a).slice(0,3).reduce((acc, cur) => {
      return acc + cur;
    }).toString();
  }

  public getFirstExpectedResult(): string {
    return 'day 1 solution 1';
  }
  public getSecondExpectedResult(): string {
    return "day 1 solution 2";
  }
}
