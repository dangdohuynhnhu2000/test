const express = require("express");
const Item = require("../models/item");
const router = new express.Router();
const PAGE_SIZE = 5;
//lấy item về
router.get("/items", (req, res) => {
  // nếu chỉ /items thì sẽ show toàn bộ sản phẩm
  // nếu /items?page=1 thì sẽ show 5 data đầu tiên, ?page=2 thì show 5 data tiếp theo và cứ vậy, mún đổi số data render ra thì đổi cái page_size
  // nếu items?name=abc thì sẽ filter ra data có name là abc
  //nếu items?name=abc&&page=1 thì sẽ filter có phân trang
  // ứng dụng cái tìm theo tên này để xem chi tiết sản phẩm
  // 2 chị nên dùng postman để test cho dễ hình dung
  var page = req.query.page;
  var item = req.query.item;
  if (item) {
    if (page) {
      page = parseInt(page);
      var skip = (page - 1) * PAGE_SIZE;
      Item.find({ item: "ves" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    } else {
      Item.find({ item: "ves" })
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
  } else {
    if (page) {
      page = parseInt(page);
      var skip = (page - 1) * PAGE_SIZE;
      Item.find({})
        .skip(skip)
        .limit(PAGE_SIZE)
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    } else {
      Item.find({})
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
  }
});
module.exports = router;
