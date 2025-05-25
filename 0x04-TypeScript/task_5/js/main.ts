// MajorCredits interface with branding
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// MinorCredits interface with branding
interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// sumMajorCredits returns a value of type MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// sumMinorCredits returns a value of type MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}