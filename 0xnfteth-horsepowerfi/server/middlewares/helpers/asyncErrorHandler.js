module.exports = (e) => (o, r, s) => {
  Promise.resolve(e(o, r, s)).catch(s);
};
