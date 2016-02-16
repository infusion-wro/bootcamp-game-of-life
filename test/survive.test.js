import {expect} from 'chai';
import survive from '../survive';
import States from '../states';

describe('survive', function(){
  it('should return DEAD for live cell with fewer than two neighbours', function(){
    let state = survive(States.LIVE, 1);
    expect(state).to.equal(States.DEAD);
  });

  it('should return LIVE for live cell with two neighbours', function(){
    let state = survive(States.LIVE, 2);
    expect(state).to.equal(States.LIVE);
  });

  it('should return LIVE for live cell with three neighbours', function(){
    let state = survive(States.LIVE, 3);
    expect(state).to.equal(States.LIVE);
  });

  it('should return DEAD for live cell with more than three neighbours', function(){
    let state = survive(States.LIVE, 4);
    expect(state).to.equal(States.DEAD);
  });

  it('should return LIVE for dead cell with three neighbours', function(){
    let state = survive(States.DEAD, 3);
    expect(state).to.equal(States.LIVE);
  });
});
