type Password = string;
type Passphrase = Password[];
export type Passphrases = Passphrase[];

export const checkPassphrases = (passphrases: Passphrases): number => {
  if (passphrases && passphrases[0] && !passphrases[0].length) {
    return 0;
  }

  if (passphrases && passphrases[1] && !passphrases[1].length) {
    return 0;
  }
  return passphrases.reduce(calculateNumberOfCorrectPassphrases, 0);
};

export const checkPassphrase = (passphrase: Passphrase): boolean => {
  if (passphrase && !passphrase.length) {
    return false;
  }
  if (passphrase && passphrase.length === 1) {
    return true;
  }

  const passwordMoreThenOnce = moreThenOnce(passphrase);
  let result: boolean = true;

  passphrase.forEach((password: Password) => {
    if (passwordMoreThenOnce(password)) {
      result = false;
    }
  });

  return result;
};

const moreThenOnce = (items: string[]) => (currentItem: string) =>
  items.reduce((foundIndexes: number[], item: string, index: number) => {
    if (currentItem === item) {
      foundIndexes.push(index);
    }
    return foundIndexes;
  }, []).length > 1;

const calculateNumberOfCorrectPassphrases = (
  numberOfCorrectPassphrases: number,
  passphrase: Passphrase
) => {
  if (checkPassphrase(passphrase)) {
    numberOfCorrectPassphrases++;
  }
  return numberOfCorrectPassphrases;
};
