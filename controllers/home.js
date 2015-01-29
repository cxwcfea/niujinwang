/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    num_investor: 12345,
    invest_amount: "888,666,321"
  });
};