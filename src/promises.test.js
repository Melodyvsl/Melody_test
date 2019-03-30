const getRandomValue = (min = 0, max = 1) => {
  // TODO: Complete this function to allow the test to pass
  return Promise.resolve(Math.random(min) * max);
};

describe('getRandomValue', () => {
  it('returns a promise of a random integer', () => {
    getRandomValue().then(value => assert.isNumber(value));
  });
});

describe('getFourRandomValues', () => {
  const getFourRandomValues = (min, max) => {
    // TODO: Complete this function to allow the test to pass

    return new Promise((resolve, reject) => {
      getRandomValue().then(value => {
        let fourInt = value
          .toFixed(4)
          .split('')
          .map(Number);
        let result = fourInt.slice(2);
        return resolve(result);
      });
    });
  };

  it('returns an array of four integers, generated by getRandomValue()', () => {
    getFourRandomValues().then(values => assert.lengthOf(values, 4));
  });
});