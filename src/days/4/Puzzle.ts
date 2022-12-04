import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    const lines = this.input.split('\n');
    let score = 0;
    for (let i = 0; i < lines.length; i++) {
      const assignments = lines[i].split(',');
      const left = this.generateNumberArray(assignments[0])
      const right = this.generateNumberArray(assignments[1]);
      if(left.every(id => right.includes(id)) || right.every(id => left.includes(id))) {
        score++;
      }
    }
    return score.toString();
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 1
    const lines = this.input.split('\n');
    let score = 0;
    for (let i = 0; i < lines.length; i++) {
      const assignments = lines[i].split(',');
      const left = this.generateNumberArray(assignments[0])
      const right = this.generateNumberArray(assignments[1]);
      if(left.some(id => right.includes(id)) || right.some(id => left.includes(id))) {
        score++;
      }
    }
    return score.toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }

  private generateNumberArray(assignment: string): number[] {
    const ids = assignment.split('-');
    const size = Number(ids[1]) - Number(ids[0]) + 1;
    return new Array(size).fill(null).map((_, i) => i + Number(ids[0])) as number[];
  }
}
