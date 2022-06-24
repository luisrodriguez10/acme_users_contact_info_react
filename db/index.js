const Sequelize = require("sequelize");
const { STRING, UUID, UUIDV4, TEXT } = Sequelize;
const seedData = require("./seed-data.json");
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/users_info_contacts_db');

const User = conn.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phone: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  adj: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  vehicle: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  bio: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const seeder = async () => {
  await conn.sync({ force: true });

  await Promise.all(seedData.map((user) => User.create(user)));
};

module.exports = {
  seeder,
  User
};
