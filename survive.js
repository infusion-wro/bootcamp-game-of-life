import States from './states';

export default (state, neighbours) => {
  if (neighbours == 3 || neighbours == 2 && state === States.LIVE) {
    return States.LIVE;
  }

  return States.DEAD;
}
