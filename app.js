var koa = require("koa");
var handlebars = require("koa-handlebars");

var app = koa();

app.use(handlebars({
  defaultLayout: "main"
}));

app.use(function *() {
  yield this.render("index", {
    title: "Test Page",
    name: "HandlebarWorld!"
  });
});

app.listen(3000);