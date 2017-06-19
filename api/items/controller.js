const models = require('../../models');

/*
 * select all items within user search query
 */
exports.findByRange = (req, res) => {
  // generate the array with the types
  const itemTypes = req.query.type.replace(/\[|\]/g,'').split(",").map(function(ele){
    let objArr = {};
    objArr['type'] = ele;
    return objArr;
  });

  // start find
  models.Item.findAll({
    where: {
      $or: [
        { lat: { $lte: Math.floor(parseFloat(req.query.lat_north)*10)/10, $gte: Math.floor(parseFloat(req.query.lat_south)*10)/10 } },
        { lng: { $lte: Math.floor(parseFloat(req.query.lng_east)*10)/10, $gte: Math.floor(parseFloat(req.query.lng_west)*10)/10 } }
      ],
      $and: {
        $or: itemTypes
      }
    },
    attributes: ['id', 'name', 'lat', 'lng', 'type']
  })
    .then(items => res.json(items))
    .catch(error => { 
      return res.status(404).json({error: 'Failed to find the items'});
    });
};
