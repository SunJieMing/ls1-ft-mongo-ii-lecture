const { Kitten, Toy } = require('../models');

const makeKitten = (req, res) => {
  const newKitten = new Kitten(req.body);
  newKitten.save((err, kitten) => {
    if (err) return res.send(err);
    res.send(kitten);
  });
};

const getKittens = (req, res) => {
  Kitten.find({}, (err, kittens) => {
    if (err) return res.send(err);
    res.send(kittens);
  });
};

const addToyToKitten = (req, res) => {
  const newToy = new Toy(req.body);
  Kitten.findById(req.params.id, (err, kitten) => {
    if (err) return res.send(err);
    kitten.toys.push(newToy);
    kitten.save((err, kitten) => {
      if (err) return res.send(err);
      res.send(kitten);
    });
  });
};

const detonateKitten = (req, res) => {
  Kitten.findById(req.params.id, (err, kitten) => {
    if (err) return res.send(err);
    kitten.remove((err, deadKitten) => {
      if (err) return res.send(err);
      res.send(deadKitten);
    });
  });
};

module.exports = (app) => {
  app.post('/kittens', makeKitten);
  app.get('/kittens', getKittens);
  app.put('/kittens/:id', addToyToKitten);
  app.delete('/kittens/:id', detonateKitten);
};
