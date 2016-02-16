import States from './states';

export default (state, neighbours) => {
  if (state === States.LIVE && neighbours < 2) {
    return States.DEAD;
  }

  if (state === States.LIVE && (neighbours == 2 || neighbours == 3)) {
    return States.LIVE;
  }

  if (state === States.LIVE && neighbours > 3) {
    return States.DEAD;
  }

  if (state == States.DEAD && neighbours == 3) {
    return States.LIVE;
  }

  return undefined;
}
