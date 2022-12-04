import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    return;
    const rucksacks = this.input.split('\n');

    const map1 = this.genCharArray('a', 'z', 1);
    const map2 = this.genCharArray('A', 'Z', 27);

    let score = 0;

    const scoreTable = new Map([...map1.entries(), ...map2.entries()]); 
    for (let index = 0; index < rucksacks.length; index + 3) {
      const rucksack = rucksacks[index];
      
      const compartments = this.splitRucksack(rucksack);
      const duplicate = this.findDuplicateInRucksack(compartments);
      
      if(duplicate) {
        score += scoreTable.get(duplicate);
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
    const rucksacks = this.input.split('\n');
    // console.log(this.input);

    const map1 = this.genCharArray('a', 'z', 1);
    const map2 = this.genCharArray('A', 'Z', 27);
    const scoreTable = new Map([...map1.entries(), ...map2.entries()]); 

    let score = 0;

    for (let index = 0; index < rucksacks.length; index = index + 3) {
      console.log(index);
      
      let rucksackA = rucksacks[index];
      let rucksackB = rucksacks[index + 1];
      let rucksackC = rucksacks[index + 2];

      // console.log(rucksackA, rucksackB, rucksackC);

      const duplicate = this.findBadgeDuplicateInGroup(rucksackA, rucksackB, rucksackC);
      
      if(duplicate) {
        score += scoreTable.get(duplicate);
      }
    }

    return score.toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }

  private splitRucksack(rucksack: string) : string[] {
    let compartments: string[] = [];
    compartments.push(rucksack.substring(0, rucksack.length / 2));
    compartments.push(rucksack.substring(rucksack.length / 2, rucksack.length));
    return compartments;
  }

  private findDuplicateInRucksack(compartments: string[]): string {
    // return duplicate letter in compartments

    const leftCompartment = compartments[0].split('');
    const rightCompartment = compartments[1].split('');
    

    for (let i = 0; i < leftCompartment.length; i++) {
      for (let j = 0; j < rightCompartment.length; j++) {
        if(leftCompartment[i] === rightCompartment[j]) {
          // console.log(`found duplicate in ${compartments}: ${leftCompartment[i]}`);
          return leftCompartment[i];
        }
      }  
    }
    
    return undefined;
  }

  private genCharArray(charA: string, charZ: string, valueStart: number): Map<string,number> {
    var a = new Map<string, number>(), i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.set(String.fromCharCode(i), valueStart++);
    }
    return a;
 }

 private findBadgeDuplicateInGroup(a: string, b: string, c: string): string {
    const rucksackA = a.split('');
    const rucksackB = b.split('');
    const rucksackC = c.split('');
    
    for (let i = 0; i < rucksackA.length; i++) {
      for (let j = 0; j < rucksackB.length; j++) {
        for (let k = 0; k < rucksackC.length; k++) {
          if(rucksackB.includes(rucksackA[i]) && rucksackC.includes(rucksackA[i])) {
            return rucksackA[i];
          }
        }
      }      
    }
    
    return undefined;
 }
}