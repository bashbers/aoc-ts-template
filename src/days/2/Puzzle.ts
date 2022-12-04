import Puzzle from '../../types/AbstractPuzzle';

const WIN = 6;
const DRAW = 3;
const LOSS = 0;

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {

    // rock paper scissors
    let score = 0;
    const lines = this.input.split('\n');
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index]; // Line containing your and opponent move
      const moves = element.split(' '); // Moves[0] == opponent
      // moves[1] == own move

      score += this.calculateScoreForGame(moves[0], moves[1]);
      score += this.getScoreForOwnMove(moves[1]);      
    }
    
    return score.toString();

  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '15';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    let score = 0;
    const lines = this.input.split('\n');
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index]; // Line containing your and opponent move
      const moves = element.split(' '); // Moves[0] == opponent
      // moves[1] == own move

      score += this.calculateScoreForGameTwo(moves[0], moves[1]);
    }
    
    return score.toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }

  private calculateScoreForGame(opponent: string, own: string): number {
    if(opponent === 'A') { // Rock
      if(own === 'X') {         
        // Rock
        return DRAW;
      } else if( own === 'Y') { 
        // Paper
        return WIN;
      } else if (own === 'Z') { 
        // Scissors
        return LOSS;
      }
      
    } else if (opponent === 'B') { // Paper
      if(own === 'X') {         
        // Rock
        return LOSS;
      } else if( own === 'Y') { 
        // Paper
        return DRAW;
      } else if (own === 'Z') { 
        // Scissors
        return WIN;
      }

    } else if (opponent === 'C') { // Scissors
      if(own === 'X') {         
        // Rock
        return WIN;
      } else if( own === 'Y') { 
        // Paper
        return LOSS;
      } else if (own === 'Z') { 
        // Scissors
        return DRAW;
      }
    }
  }

  private calculateScoreForGameTwo(opponent: string, own: string): number {
    if(opponent === 'A') { // Rock
      if(own === 'X') {         
        return LOSS + this.getScoreForOwnMoveTwo('scissor');
      } else if( own === 'Y') { 
        return DRAW + this.getScoreForOwnMoveTwo('rock');
      } else if (own === 'Z') { 
        return WIN + this.getScoreForOwnMoveTwo('paper');
      }
      
    } else if (opponent === 'B') { // Paper
      if(own === 'X') {         
        return LOSS + this.getScoreForOwnMoveTwo('rock');
      } else if( own === 'Y') { 
        return DRAW + this.getScoreForOwnMoveTwo('paper');
      } else if (own === 'Z') { 
        return WIN + this.getScoreForOwnMoveTwo('scissor');
      }

    } else if (opponent === 'C') { // Scissors
      if(own === 'X') {         
        return LOSS + this.getScoreForOwnMoveTwo('paper');
      } else if( own === 'Y') { 
        return DRAW + this.getScoreForOwnMoveTwo('scissor');
      } else if (own === 'Z') { 
        return WIN + this.getScoreForOwnMoveTwo('rock');
      }
    }
  }

  private getScoreForOwnMove(move: string): number {
    switch (move) {
      case 'X':
        return 1;
      case 'Y': 
        return 2;
      case 'Z': 
        return 3
      default:
        console.log(`${move} went wrong getting score for own move`);
        
    }
  }

  private getScoreForOwnMoveTwo(move: 'rock' | 'paper' | 'scissor') {
    switch (move) {
      case 'rock':
        return 1;
      case 'paper': 
        return 2;
      case 'scissor': 
        return 3
      default:
        console.log(`${move} went wrong getting score for own move`);   
    }
  }
}
