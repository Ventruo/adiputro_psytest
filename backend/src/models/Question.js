const { getDB } = require("../setup/sequelize");
const sequelize = getDB();
const { Model, DataTypes } = require("sequelize");

class Question extends Model {}
Question.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    option_a: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option_b: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option_c: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option_d: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    option_e: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    option_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1: text, 2: image",
    },
    question_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1: text, 2: image",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1: available, 0: deleted",
    },
  },
  {
    sequelize,
    modelName: "question",
    tableName: "question",
  }
);

module.exports = Question;
