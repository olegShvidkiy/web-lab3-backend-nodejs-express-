module.exports = class ItemModel {
  constructor(title) {
    this.title = title;
    this.id = Math.round(Math.random() * 100000).toString();
    this.chooseNumberVotes = 0;
    this.percent = 0;
    this.chosed = false;
  }
};
