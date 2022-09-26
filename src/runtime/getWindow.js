module.exports = function getWindow() {
  if ('Zone' in global) {
    const zonedWindow = Zone.current.get('window');
    if (zonedWindow) {
      return zonedWindow;
    }
  }
  return window;
};
