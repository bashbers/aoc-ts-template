import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const differentChars = 4;
    let marker = -1;

    let foundChars = [];

    for (let i = 0; i < this.input.length; i++) {
      const char = this.input.charAt(i);
      foundChars.push(char);
      if(foundChars.length < differentChars) {
        continue;
      }

      if(this.uniqueCharsInArray(foundChars)) {
        marker = i + 1;
        break;
      }
      else {
        if(foundChars.length > differentChars - 1) {
          foundChars.shift();
        }
      }
    }

    
    return marker.toString();
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    const differentChars = 14;
    let marker = -1;

    let foundChars = [];

    for (let i = 0; i < this.input.length; i++) {
      const char = this.input.charAt(i);
      foundChars.push(char);
      if(foundChars.length < differentChars) {
        continue;
      }

      if(this.uniqueCharsInArray(foundChars)) {
        marker = i + 1;
        break;
      }
      else {
        if(foundChars.length > differentChars - 1) {
          foundChars.shift();
        }
      }
    }

    
    return marker.toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }

  private uniqueCharsInArray(foundChars: string[]): boolean {
    for (let j = 0; j < foundChars.length; j++) {
      for (let k = j + 1; k < foundChars.length; k++) {
        if(foundChars[j] === foundChars[k]) {
          return false;
        }
      }
    }
    return true;
  }
}
