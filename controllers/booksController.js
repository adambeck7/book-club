const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Book
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
  },

  create: (req, res) => {
    const { title, author, synopsis } = req.body
    db.Book
      .create({
        title,
        author,
        synopsis
      })
      .then(dbModel => res.json(dbModel));
  },

  update: (req, res) => {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel));
  },

  delete: (req, res) => {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel));
  }
}