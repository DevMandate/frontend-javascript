// Define nominal types using brand property

interface MajorCredits {
  credits: number;
  __brand: 'Major';
}

interface MinorCredits {
  credits: number;
  __brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Minor',
  };
}

// Example usage (optional, for testing)
const major1: MajorCredits = { credits: 3, __brand: 'Major' };
const major2: MajorCredits = { credits: 4, __brand: 'Major' };

const minor1: MinorCredits = { credits: 1, __brand: 'Minor' };
const minor2: MinorCredits = { credits: 2, __brand: 'Minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, __brand: 'Major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: 'Minor' }
