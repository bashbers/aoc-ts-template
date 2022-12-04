import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const elves = [];

    const lines = this.input.split('\n');
    let elfCounter = 0;
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index];
      console.log(element);
      
      if(element) {

      }
      else {

      }
    }
    
    return 'day 1 solution 1';
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '24000';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    return 'day 1 solution 2';
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
