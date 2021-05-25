const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/db");
const cors = require("cors");
const Items = db.Items;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("get");
  sendTable().then((items) => {
    res.send(items);
  });
});

app.post("/upload", (req, res) => {
  console.log("post");
  //   console.log(req.body);
  writeToDB(req.body);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`);
});

async function writeToDB(req) {
  console.log(req);
  await Items.destroy({
    where: {},
    truncate: true,
  });
  req.items.forEach((item) => {
    Items.create({
      id: item["id"],
      title: item["title"],
      chooseNumberVotes: item["chooseNumberVotes"],
      percent: item["percent"],
      chosed: item["chosed"],
    });
  });
}

function sendTable() {
  return Items.findAll()
    .then((res) => {
      let responce = { items: [] };
      res.forEach((item) => {
        responce.items.push(item.dataValues);
      });
      return responce;
    })
    .catch((err) => {
      console.log(err);
    });
}
