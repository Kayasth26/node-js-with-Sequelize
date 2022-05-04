module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
      "addressdata",
      {
        title: {
          type: Sequelize.STRING,
        },
        address1: {
          type: Sequelize.STRING,
        },
        address2: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
          enum:["india", "maldives", "congo", "germany"],
        },
        state: {
          type: Sequelize.STRING,
          enum:(["gujarat", "goa", "punjab", "rajasthan"]),
        },
        city: {
          type: Sequelize.STRING,
          enum:(["navsari", "ahmedabad", "surat", "gandhinagar"]),
        },
        pincode: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
    return Address;
};