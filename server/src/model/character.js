const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("datadisney", "root", "971014", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

class Character extends Model {}
Character.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    history: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Character",
  }
);

module.exports = Character;

/*async function testConnexion() {
  try {
    await sequelize.authenticate();
    console.log("all good");
  } catch (err) {
    console.error("all bad", err);
  }
}

testConnexion();*/
