// module.exports = function(sequelize, DataTypes) {
//   var Apartment = sequelize.define("Apartment", {
//     address: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     bedroom: DataTypes.INTEGER,
//     city: DataTypes.STRING,
//     state: DataTypes.STRING, 
//     zip: DataTypes.INTEGER,
//     lat: DataTypes.INTEGER,
//     longitude: DataTypes.INTEGER,
//     image_url: DataTypes.STRING
//   });
//   return Apartment;
// };



module.exports = function(sequelize, DataTypes) {
  var Apartment = sequelize.define("Apartment", {
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    bedroom: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING, 
    zip: DataTypes.INTEGER,
    lat: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
});
  return Apartment;
};