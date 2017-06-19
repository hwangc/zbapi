const models = require('../../models');

/*
 * select one item
 */
exports.findById = (req, res) => {
  // get the id from req.query
  const id = parseInt(req.params.id, 10);
  
  // start find
  models.Item.findOne({
    where: {
      id: id
    },
    attributes: ['id', 'name', 'lat', 'lng', 'type', 'rent', 'deposit', 'description']
  }).then(item => res.json(item))
    .catch(error => {
      return res.status(404).json({error: 'No item found'});
  });

};

// insert item
exports.create = (req, res) => {
  // new data
  const newItem = {
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    type: req.body.type,
    rent: req.body.rent,
    deposit: req.body.deposit,
    description: req.body.description
  };

  // start insert data
  models.Item.create(newItem)
    .then((item) => {
      return res.status(201).json({id: item.id, message: "posted"})
    })
    .catch(error => {
      return res.status(400).json({error: 'Failed to post the item'})
    });
};

// update item
exports.update = (req, res) => {
  // get the id from req.params
  const id = parseInt(req.params.id, 10);
  
  // update data
  const updateItem = {
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    type: req.body.type,
    rent: req.body.rent,
    deposit: req.body.deposit,
    description: req.body.description
  };
  
  // start update data
  models.Item.update(updateItem, {
    where: {id: id}
  })
  .then(item => res.status(201).json({id: id, message: "modified"}))
  .catch(error => {
    return res.status(400).json({error: 'Failed to update the item'});
  });
}
