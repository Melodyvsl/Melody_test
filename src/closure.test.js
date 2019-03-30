describe('multiplier', () => {
  const multiplier = num1 => {
    // TODO: Complete this function to allow the test to pass
    return num2 => num2 * num1;
  };

  describe('when given a number, a function is returned which when called', () => {
    it('returns the multiplication of the two numbers', () => {
      const times12 = multiplier(12);

      assert.equal(times12(3), 36);
    });
  });
});

describe('counter', () => {
  let counter = -1;
  const count = () => {
    // TODO: Complete this function to allow the test to pass
    return (() => (counter += 1))();
  };

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
