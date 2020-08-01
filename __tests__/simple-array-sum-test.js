let simpleSum = require('../problemSolving/simpleArraySum/simple-array-sum');

describe('Simple Array Sum', ()=> {
    
  it('simpleSum() accepts an array of any length', ()=> {
    let input1 = [1,2,3,4,5,6,7,8,9];
    let input2 = [5,6,7,8,9];
    let input3 = [0,1,2,3,4,5,6,7,8,9,10];
    expect(simpleSum(input1)).toEqual(45);
    expect(simpleSum(input2)).toEqual(35);
    expect(simpleSum(input3)).toEqual(55);
  });

  it('simpleSum() returns the sum of any array', ()=> {
    let input1 = [1,2,3,4,5,6,7,8,9];
    expect(simpleSum(input1)).toEqual(45);
  });

  it('simpleSum() returns the sum of any array with negative numbers', ()=> {
    let input1 = [1,2,3,4,5,6,7,8,-9];
    expect(simpleSum(input1)).toEqual(27);
  });
});