export const simulateClick = (e, ref, path) => {
  if (e.keyCode === 13) {
    ref.current.scrollTo(path);
  }
};
