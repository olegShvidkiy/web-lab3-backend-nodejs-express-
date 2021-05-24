const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "Items",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      chooseNumberVotes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      percent: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      chosed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
