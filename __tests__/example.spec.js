const sum = (a, b) => {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return 'only numbers'
  }

  return a + b
}

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should add string return error', () => {
    expect(sum('1', '2')).toBe('only numbers')
  })
})
