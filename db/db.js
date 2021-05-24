// const sqlite3 = require("sqlite3");
// sqlite3.verbose();
// const db = new sqlite3.Database("db.sqlite3");

// const sqDB = function sqDB() {
//   db.serialize(function () {
//     db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
//       console.log(row.id + ": " + row.info);
//     });
//     // db.run("DELETE FROM Lorem");
//   });

//   db.close();
// };
// module.exports = {
//   sqDB: sqDB,
//   sqlite3: sqlite3,
//   db: db,
// };

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite3",
});

const Items = require("./tableModel")(sequelize);

module.exports = {
  sequelize: sequelize,
  Items: Items,
};
