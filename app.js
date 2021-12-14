var createError = require("http-errors");
var express = require("express");
require("./db/mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var fs = require("fs");

var homeRouter = require("./routes/home");
var shopgridRouter = require("./routes/shop_grid");
var shopdetailsRouter = require("./routes/shop_details");
var productdetailsRouter = require("./components/products/product_details");
var shopingcartRouter = require("./components/cart/shoping_cart");
var checkoutRouter = require("./components/orders/checkout");
const itemRouter = require("./routes/item");
var app = express();
var { engine } = require("express-handlebars");

// view engine setup
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/shop-grid", shopgridRouter);
app.use("/shop-details", shopdetailsRouter);
app.use("/shop-details/:id", productdetailsRouter);
app.use("/shoping-cart", shopingcartRouter);
app.use("/checkout", checkoutRouter);

app.use(itemRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { layout: false });
});

module.exports = app;
