import { checkPassphrase, checkPassphrases } from "./passphrases";

describe("checkMultiplePassphrases()", () => {
  it("should return one when one correct passphrases is given", () => {
    expect(checkPassphrases([["aaa"]])).toEqual(1);
  });

  // No use case
  it("should return zero when empty passphrase is given", () => {
    expect(checkPassphrases([[""]])).toEqual(0);
  });

  it("should return two when two correct passphrases are given", () => {
    expect(checkPassphrases([["aaa"], ["bbb"]])).toEqual(2);
  });

  it("should return one when one correct passphrase is given", () => {
    expect(checkPassphrases([["aaa"], ["aaa", "aaa"]])).toEqual(1);
  });
});

describe("checkPassphrase()", () => {
  it('should disallow empty passphrase', () => {
    expect(checkPassphrase([])).toBeFalsy();
  });

  // No use case
  it('should disallow empty passwords', () => {
    expect(checkPassphrase([""])).toBeFalsy();
  });

  test("should accept one word", () => {
    expect(checkPassphrase(["aaa"])).toBeTruthy();
  });

  test("should disallow two same words", () => {
    expect(checkPassphrase(["aaa", "aaa"])).toBeFalsy();
  });

  test("should disallow three same words", () => {
    expect(checkPassphrase(["aaa", "aaa", "aaa"])).toBeFalsy();
  });

  test("should disallow two same words and another", () => {
    expect(checkPassphrase(["aaa", "ccc", "aaa"])).toBeFalsy();
  });

  test("should acccept two different words", () => {
    expect(checkPassphrase(["aaa", "bbb"])).toBeTruthy();
  });

  test("should acccept three different words", () => {
    expect(checkPassphrase(["aaa", "bbb", "ccc"])).toBeTruthy();
  });
});
