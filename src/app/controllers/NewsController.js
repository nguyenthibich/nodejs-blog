class NewsController {
  index(req, res) {
    res.render("news");
    // res.render("news", { layout: false });
  }

  show(req, res) {
    res.send("news");
  }
}
module.exports = new NewsController();
